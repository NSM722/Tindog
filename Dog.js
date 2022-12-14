class Dog {
    constructor(data) {
        Object.assign(this, data)
    }
    
    setMatchStatus(bool) {
        this.hasBeenLiked = bool
        this.hasBeenSwiped = true
    }
    
    getDogHtml() {
        const { name, avatar, age, bio } = this
        return `
            <div class="dog-profile" id="dog-profile">
                <div class="dog-info" id="dog-info">
                    <h4 class="name-and-age">${name}, ${age}</h4>
                    <p class="bio">${bio}</p>
                </div>
                <img class="dog-img" src="${avatar}" alt="${name}'s profile picture">
            </div>
        `
    }
}

export default Dog;