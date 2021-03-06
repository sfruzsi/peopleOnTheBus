# Exercise: peopleOnTheBus
|[![Testing](https://github.com/sfruzsi/peopleOnTheBus/actions/workflows/test.yml/badge.svg)](https://github.com/sfruzsi/peopleOnTheBus/actions/workflows/test.yml)|[![Linting](https://github.com/sfruzsi/peopleOnTheBus/actions/workflows/lint.yml/badge.svg)](https://github.com/sfruzsi/peopleOnTheBus/actions/workflows/lint.yml)|[![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=sfruzsi_peopleOnTheBus&metric=code_smells)](https://sonarcloud.io/summary/new_code?id=sfruzsi_peopleOnTheBus)|[![Vulnerabilities](https://sonarcloud.io/api/project_badges/measure?project=sfruzsi_peopleOnTheBus&metric=vulnerabilities)](https://sonarcloud.io/summary/new_code?id=sfruzsi_peopleOnTheBus)

There is a bus moving in the city, and it takes and drop some people in each bus stop.

You are provided with a list (or array) of integer pairs.
Elements of each pair represent number of people get into bus (The first item) and number of people get off the bus (The second item) in a bus stop.

Your task is to return number of people who are still in the bus after the last bus station (after the last array). Even though it is the last bus stop, the bus is not empty and some people are still in the bus, and they are probably sleeping there :D

> Installed with automatic script
- Source file
- Basic test file
- Jest for testing (watch and coverage)
- EsLint + Prettier for code style check
- Complexity check

## User story 1
> As a bus driver
> I want to calculate how many people are left on the bus after 1 stop
> So that I can know how many are left

### Scenario 1
Given a bus that has one stop
When I calculate the remaining passangers
Then I get the onboarding passangers' number

## User story 2
> As a bus driver
> I want to calculate how much people are left on the bus after 2 stops
> So that I can know how many are left

### Scenario 1
Given a bus that has two stops
When I calculate the remaining passangers
Then I get the remaining passangers

## User story 2
> As a bus driver
> I want to calculate how much people are left on the bus after multiple stops
> So that I can know how many are left


### Scenario 1
Given a bus that has more then 2 stops
When I calculate the remaining passangers
Then I get the remaining passangers
