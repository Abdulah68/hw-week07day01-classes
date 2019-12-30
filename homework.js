class RunTracker{

    constructor(name){
      
        this.name = name
        this.email = email
        this.run =[]

    }
    addRun(date , time , distance ){
        this.date= date
        this.time = time
        this.distance= distance
        this.run.push({date : this.date, time : this.time, distance : this.distance })
    }
    totalDistance(){
        const findTotal = this.run.reduce((prev , curr) => prev + curr)

        return findTotal
           
    }
    longestDistance(){
        const findLong = this.run.reduce((prev , curr) => prev > curr ? prev :curr);
        return findTotal

    }
    totalTime(){

        const findTotalt = this.run.reduce((prev , curr) => prev + curr)
        return findTotalt
    }
    avargeSpeed(){

         const avgSpeed = totalDistance() / totalTime()

         return avgSpeed

    }


}

const runner = new RunTracker("Salman", "Salman@salman.com");

runner.addRun("2017-01-01", 10, 30)
runner.addRun("2017-01-02", 5, 20)

console.log.apply(runner.totalDistance()) // 50 meters

console.log.apply(runner.longestDistance()) // 30 meters

console.log(runner.averageSpeed()) // 0.3 meters per second