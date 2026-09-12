> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkquantitytypeidentifier](https://developer.apple.com/documentation/healthkit/hkquantitytypeidentifier)

# HKQuantityTypeIdentifier (Swift)

**Framework:** HealthKit  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS · watchOS

The identifiers that create quantity type objects.

## Declaration

```swift
struct HKQuantityTypeIdentifier
```

<a id="overview"></a>

## Overview

To create an [HKQuantityType](hkquantitytype.md) instance, pass an [HKQuantityTypeIdentifier](hkquantitytypeidentifier.md) value to the [quantityType(forIdentifier:)](hkobjecttype/quantitytype%28foridentifier_%29.md) method.

## Topics

### Activity

- [stepCount](hkquantitytypeidentifier/stepcount.md): A quantity sample type that measures the number of steps the user has taken.
- [distanceWalkingRunning](hkquantitytypeidentifier/distancewalkingrunning.md): A quantity sample type that measures the distance the user has moved by walking or running.
- [runningGroundContactTime](hkquantitytypeidentifier/runninggroundcontacttime.md): A quantity sample type that measures the amount of time the runner’s foot is in contact with the ground while running.
- [runningPower](hkquantitytypeidentifier/runningpower.md): A quantity sample type that measures the rate of work required for the runner to maintain their speed.
- [runningSpeed](hkquantitytypeidentifier/runningspeed.md): A quantity sample type that measures the runner’s speed.
- [runningStrideLength](hkquantitytypeidentifier/runningstridelength.md): A quantity sample type that measures the distance covered by a single step while running.
- [runningVerticalOscillation](hkquantitytypeidentifier/runningverticaloscillation.md): A quantity sample type measuring pelvis vertical range of motion during a single running stride.
- [distanceCycling](hkquantitytypeidentifier/distancecycling.md): A quantity sample type that measures the distance the user has moved by cycling.
- [pushCount](hkquantitytypeidentifier/pushcount.md): A quantity sample type that measures the number of pushes that the user has performed while using a wheelchair.
- [distanceWheelchair](hkquantitytypeidentifier/distancewheelchair.md): A quantity sample type that measures the distance the user has moved using a wheelchair.
- [swimmingStrokeCount](hkquantitytypeidentifier/swimmingstrokecount.md): A quantity sample type that measures the number of strokes performed while swimming.
- [distanceSwimming](hkquantitytypeidentifier/distanceswimming.md): A quantity sample type that measures the distance the user has moved while swimming.
- [distanceDownhillSnowSports](hkquantitytypeidentifier/distancedownhillsnowsports.md): A quantity sample type that measures the distance the user has traveled while skiing or snowboarding.
- [basalEnergyBurned](hkquantitytypeidentifier/basalenergyburned.md): A quantity sample type that measures the resting energy burned by the user.
- [activeEnergyBurned](hkquantitytypeidentifier/activeenergyburned.md): A quantity sample type that measures the amount of active energy the user has burned.
- [flightsClimbed](hkquantitytypeidentifier/flightsclimbed.md): A quantity sample type that measures the number flights of stairs that the user has climbed.
- [nikeFuel](hkquantitytypeidentifier/nikefuel.md): A quantity sample type that measures the number of NikeFuel points the user has earned.
- [appleExerciseTime](hkquantitytypeidentifier/appleexercisetime.md): A quantity sample type that measures the amount of time the user spent exercising.
- [appleMoveTime](hkquantitytypeidentifier/applemovetime.md): A quantity sample type that measures the amount of time the user has spent performing activities that involve full-body movements during the specified day.
- [appleStandTime](hkquantitytypeidentifier/applestandtime.md): A quantity sample type that measures the amount of time the user has spent standing.
- [vo2Max](hkquantitytypeidentifier/vo2max.md): A quantity sample that measures the maximal oxygen consumption during exercise.
- [crossCountrySkiingSpeed](hkquantitytypeidentifier/crosscountryskiingspeed.md): A quantity sample type that measures how fast you are traveling while cross country skiing.
- [cyclingCadence](hkquantitytypeidentifier/cyclingcadence.md): A quantity sample type that represents the rate at which the user is pedaling.
- [cyclingFunctionalThresholdPower](hkquantitytypeidentifier/cyclingfunctionalthresholdpower.md): A quantity sample type that measures the estimated maximum average power sustained while riding a bike for 60 minutes.
- [cyclingPower](hkquantitytypeidentifier/cyclingpower.md): A quantity sample type that measures the estimated power being used while riding a bike.
- [cyclingSpeed](hkquantitytypeidentifier/cyclingspeed.md): A quantity sample type that measures how fast you are traveling while riding a bike.
- [distanceCrossCountrySkiing](hkquantitytypeidentifier/distancecrosscountryskiing.md): A quantity sample type that measures the distance the user has moved by cross country skiing.
- [distancePaddleSports](hkquantitytypeidentifier/distancepaddlesports.md): A quantity sample type that measures the distance the user has moved by paddling sports.
- [distanceRowing](hkquantitytypeidentifier/distancerowing.md): A quantity sample type that measures the distance the user has moved by rowing.
- [distanceSkatingSports](hkquantitytypeidentifier/distanceskatingsports.md): A quantity sample type that measures the distance the user has moved by skating.
- [estimatedWorkoutEffortScore](hkquantitytypeidentifier/estimatedworkouteffortscore.md)
- [paddleSportsSpeed](hkquantitytypeidentifier/paddlesportsspeed.md): A quantity sample type that measures the distance the user has moved by paddling sports.
- [physicalEffort](hkquantitytypeidentifier/physicaleffort.md): A quantity sample type that measures the estimated amount of energy being used to perform a task excluding other factors such as temperature, altitude, or heart rate.
- [rowingSpeed](hkquantitytypeidentifier/rowingspeed.md): A quantity sample type that measures how fast the rower is moving.
- [workoutEffortScore](hkquantitytypeidentifier/workouteffortscore.md)

### Body measurements

- [height](hkquantitytypeidentifier/height.md): A quantity sample type that measures the user’s height.
- [bodyMass](hkquantitytypeidentifier/bodymass.md): A quantity sample type that measures the user’s weight.
- [bodyMassIndex](hkquantitytypeidentifier/bodymassindex.md): A quantity sample type that measures the user’s body mass index.
- [leanBodyMass](hkquantitytypeidentifier/leanbodymass.md): A quantity sample type that measures the user’s lean body mass.
- [bodyFatPercentage](hkquantitytypeidentifier/bodyfatpercentage.md): A quantity sample type that measures the user’s body fat percentage.
- [waistCircumference](hkquantitytypeidentifier/waistcircumference.md): A quantity sample type that measures the user’s waist circumference.
- [appleSleepingWristTemperature](hkquantitytypeidentifier/applesleepingwristtemperature.md): A quantity sample type that records the wrist temperature during sleep.

### Reproductive health

- [basalBodyTemperature](hkquantitytypeidentifier/basalbodytemperature.md): A quantity sample type that records the user’s basal body temperature.

### Hearing

- [environmentalAudioExposure](hkquantitytypeidentifier/environmentalaudioexposure.md): A quantity sample type that measures audio exposure to sounds in the environment.
- [environmentalSoundReduction](hkquantitytypeidentifier/environmentalsoundreduction.md): A quantity sample type that measures the difference in sound intensity when wearing headphones that lower environmental sound levels.
- [headphoneAudioExposure](hkquantitytypeidentifier/headphoneaudioexposure.md): A quantity sample type that measures audio exposure from headphones.

### Vital signs

- [heartRate](hkquantitytypeidentifier/heartrate.md): A quantity sample type that measures the user’s heart rate.
- [restingHeartRate](hkquantitytypeidentifier/restingheartrate.md): A quantity sample type that measures the user’s resting heart rate.
- [walkingHeartRateAverage](hkquantitytypeidentifier/walkingheartrateaverage.md): A quantity sample type that measures the user’s heart rate while walking.
- [heartRateVariabilitySDNN](hkquantitytypeidentifier/heartratevariabilitysdnn.md): A quantity sample type that measures the standard deviation of heartbeat intervals.
- [heartRateRecoveryOneMinute](hkquantitytypeidentifier/heartraterecoveryoneminute.md): A quantity sample that records the reduction in heart rate from the peak exercise rate to the rate one minute after exercising ended.
- [atrialFibrillationBurden](hkquantitytypeidentifier/atrialfibrillationburden.md): A quantity type that measures an estimate of the percentage of time a person’s heart shows signs of atrial fibrillation (AFib) while wearing Apple Watch.
- [oxygenSaturation](hkquantitytypeidentifier/oxygensaturation.md): A quantity sample type that measures the user’s oxygen saturation.
- [bodyTemperature](hkquantitytypeidentifier/bodytemperature.md): A quantity sample type that measures the user’s body temperature.
- [bloodPressureDiastolic](hkquantitytypeidentifier/bloodpressurediastolic.md): A quantity sample type that measures the user’s diastolic blood pressure.
- [bloodPressureSystolic](hkquantitytypeidentifier/bloodpressuresystolic.md): A quantity sample type that measures the user’s systolic blood pressure.
- [respiratoryRate](hkquantitytypeidentifier/respiratoryrate.md): A quantity sample type that measures the user’s respiratory rate.

### Lab and test results

- [bloodGlucose](hkquantitytypeidentifier/bloodglucose.md): A quantity sample type that measures the user’s blood glucose level.
- [electrodermalActivity](hkquantitytypeidentifier/electrodermalactivity.md): A quantity sample type that measures electrodermal activity.
- [forcedExpiratoryVolume1](hkquantitytypeidentifier/forcedexpiratoryvolume1.md): A quantity sample type that measures the amount of air that can be forcibly exhaled from the lungs during the first second of a forced exhalation.
- [forcedVitalCapacity](hkquantitytypeidentifier/forcedvitalcapacity.md): A quantity sample type that measures the amount of air that can be forcibly exhaled from the lungs after taking the deepest breath possible.
- [inhalerUsage](hkquantitytypeidentifier/inhalerusage.md): A quantity sample type that measures the number of puffs the user takes from their inhaler.
- [insulinDelivery](hkquantitytypeidentifier/insulindelivery.md): A quantity sample that measures the amount of insulin delivered.
- [numberOfTimesFallen](hkquantitytypeidentifier/numberoftimesfallen.md): A quantity sample type that measures the number of times the user fell.
- [peakExpiratoryFlowRate](hkquantitytypeidentifier/peakexpiratoryflowrate.md): A quantity sample type that measures the user’s maximum flow rate generated during a forceful exhalation.
- [peripheralPerfusionIndex](hkquantitytypeidentifier/peripheralperfusionindex.md): A quantity sample type that measures the user’s peripheral perfusion index.

### Mindfulness and Sleep

- [appleSleepingWristTemperature](hkquantitytypeidentifier/applesleepingwristtemperature.md): A quantity sample type that records the wrist temperature during sleep.
- [appleSleepingBreathingDisturbances](hkquantitytypeidentifier/applesleepingbreathingdisturbances.md)

### Nutrition

- [dietaryBiotin](hkquantitytypeidentifier/dietarybiotin.md): A quantity sample type that measures the amount of biotin (vitamin B7) consumed.
- [dietaryCaffeine](hkquantitytypeidentifier/dietarycaffeine.md): A quantity sample type that measures the amount of caffeine consumed.
- [dietaryCalcium](hkquantitytypeidentifier/dietarycalcium.md): A quantity sample type that measures the amount of calcium consumed.
- [dietaryCarbohydrates](hkquantitytypeidentifier/dietarycarbohydrates.md): A quantity sample type that measures the amount of carbohydrates consumed.
- [dietaryChloride](hkquantitytypeidentifier/dietarychloride.md): A quantity sample type that measures the amount of chloride consumed.
- [dietaryCholesterol](hkquantitytypeidentifier/dietarycholesterol.md): A quantity sample type that measures the amount of cholesterol consumed.
- [dietaryChromium](hkquantitytypeidentifier/dietarychromium.md): A quantity sample type that measures the amount of chromium consumed.
- [dietaryCopper](hkquantitytypeidentifier/dietarycopper.md): A quantity sample type that measures the amount of copper consumed.
- [dietaryEnergyConsumed](hkquantitytypeidentifier/dietaryenergyconsumed.md): A quantity sample type that measures the amount of energy consumed.
- [dietaryFatMonounsaturated](hkquantitytypeidentifier/dietaryfatmonounsaturated.md): A quantity sample type that measures the amount of monounsaturated fat consumed.
- [dietaryFatPolyunsaturated](hkquantitytypeidentifier/dietaryfatpolyunsaturated.md): A quantity sample type that measures the amount of polyunsaturated fat consumed.
- [dietaryFatSaturated](hkquantitytypeidentifier/dietaryfatsaturated.md): A quantity sample type that measures the amount of saturated fat consumed.
- [dietaryFatTotal](hkquantitytypeidentifier/dietaryfattotal.md): A quantity sample type that measures the total amount of fat consumed.
- [dietaryFiber](hkquantitytypeidentifier/dietaryfiber.md): A quantity sample type that measures the amount of fiber consumed.
- [dietaryFolate](hkquantitytypeidentifier/dietaryfolate.md): A quantity sample type that measures the amount of folate (folic acid) consumed.
- [dietaryIodine](hkquantitytypeidentifier/dietaryiodine.md): A quantity sample type that measures the amount of iodine consumed.
- [dietaryIron](hkquantitytypeidentifier/dietaryiron.md): A quantity sample type that measures the amount of iron consumed.
- [dietaryMagnesium](hkquantitytypeidentifier/dietarymagnesium.md): A quantity sample type that measures the amount of magnesium consumed.
- [dietaryManganese](hkquantitytypeidentifier/dietarymanganese.md): A quantity sample type that measures the amount of manganese consumed.
- [dietaryMolybdenum](hkquantitytypeidentifier/dietarymolybdenum.md): A quantity sample type that measures the amount of molybdenum consumed.
- [dietaryNiacin](hkquantitytypeidentifier/dietaryniacin.md): A quantity sample type that measures the amount of niacin (vitamin B3) consumed.
- [dietaryPantothenicAcid](hkquantitytypeidentifier/dietarypantothenicacid.md): A quantity sample type that measures the amount of pantothenic acid (vitamin B5) consumed.
- [dietaryPhosphorus](hkquantitytypeidentifier/dietaryphosphorus.md): A quantity sample type that measures the amount of phosphorus consumed.
- [dietaryPotassium](hkquantitytypeidentifier/dietarypotassium.md): A quantity sample type that measures the amount of potassium consumed.
- [dietaryProtein](hkquantitytypeidentifier/dietaryprotein.md): A quantity sample type that measures the amount of protein consumed.
- [dietaryRiboflavin](hkquantitytypeidentifier/dietaryriboflavin.md): A quantity sample type that measures the amount of riboflavin (vitamin B2) consumed.
- [dietarySelenium](hkquantitytypeidentifier/dietaryselenium.md): A quantity sample type that measures the amount of selenium consumed.
- [dietarySodium](hkquantitytypeidentifier/dietarysodium.md): A quantity sample type that measures the amount of sodium consumed.
- [dietarySugar](hkquantitytypeidentifier/dietarysugar.md): A quantity sample type that measures the amount of sugar consumed.
- [dietaryThiamin](hkquantitytypeidentifier/dietarythiamin.md): A quantity sample type that measures the amount of thiamin (vitamin B1) consumed.
- [dietaryVitaminA](hkquantitytypeidentifier/dietaryvitamina.md): A quantity sample type that measures the amount of vitamin A consumed.
- [dietaryVitaminB12](hkquantitytypeidentifier/dietaryvitaminb12.md): A quantity sample type that measures the amount of cyanocobalamin (vitamin B12) consumed.
- [dietaryVitaminB6](hkquantitytypeidentifier/dietaryvitaminb6.md): A quantity sample type that measures the amount of pyridoxine (vitamin B6) consumed.
- [dietaryVitaminC](hkquantitytypeidentifier/dietaryvitaminc.md): A quantity sample type that measures the amount of vitamin C consumed.
- [dietaryVitaminD](hkquantitytypeidentifier/dietaryvitamind.md): A quantity sample type that measures the amount of vitamin D consumed.
- [dietaryVitaminE](hkquantitytypeidentifier/dietaryvitamine.md): A quantity sample type that measures the amount of vitamin E consumed.
- [dietaryVitaminK](hkquantitytypeidentifier/dietaryvitamink.md): A quantity sample type that measures the amount of vitamin K consumed.
- [dietaryWater](hkquantitytypeidentifier/dietarywater.md): A quantity sample type that measures the amount of water consumed.
- [dietaryZinc](hkquantitytypeidentifier/dietaryzinc.md): A quantity sample type that measures the amount of zinc consumed.

### Alcohol consumption

- [bloodAlcoholContent](hkquantitytypeidentifier/bloodalcoholcontent.md): A quantity sample type that measures the user’s blood alcohol content.
- [numberOfAlcoholicBeverages](hkquantitytypeidentifier/numberofalcoholicbeverages.md): A quantity sample type that measures the number of standard alcoholic drinks that the user has consumed.

### Mobility

- [appleWalkingSteadiness](hkquantitytypeidentifier/applewalkingsteadiness.md): A quantity sample type that measures the steadiness of the user’s gait.
- [sixMinuteWalkTestDistance](hkquantitytypeidentifier/sixminutewalktestdistance.md): A quantity sample type that stores the distance a user can walk during a six-minute walk test.
- [walkingSpeed](hkquantitytypeidentifier/walkingspeed.md): A quantity sample type that measures the user’s average speed when walking steadily over flat ground.
- [walkingStepLength](hkquantitytypeidentifier/walkingsteplength.md): A quantity sample type that measures the average length of the user’s step when walking steadily over flat ground.
- [walkingAsymmetryPercentage](hkquantitytypeidentifier/walkingasymmetrypercentage.md): A quantity sample type that measures the percentage of steps in which one foot moves at a different speed than the other when walking on flat ground.
- [walkingDoubleSupportPercentage](hkquantitytypeidentifier/walkingdoublesupportpercentage.md): A quantity sample type that measures the percentage of time when both of the user’s feet touch the ground while walking steadily over flat ground.
- [stairAscentSpeed](hkquantitytypeidentifier/stairascentspeed.md): A quantity sample type measuring the user’s speed while climbing a flight of stairs.
- [stairDescentSpeed](hkquantitytypeidentifier/stairdescentspeed.md): A quantity sample type measuring the user’s speed while descending a flight of stairs.

### UV exposure

- [timeInDaylight](hkquantitytypeidentifier/timeindaylight.md): A quantity sample type that measures amount of time the user spent in daylight.
- [uvExposure](hkquantitytypeidentifier/uvexposure.md): A quantity sample type that measures the user’s exposure to UV radiation.

### Diving

- [underwaterDepth](hkquantitytypeidentifier/underwaterdepth.md): A quantity sample that records a person’s depth underwater.
- [waterTemperature](hkquantitytypeidentifier/watertemperature.md): A quantity sample that records the water temperature.

### Initializers

- [init(rawValue:)](hkquantitytypeidentifier/init%28rawvalue_%29.md): Returns a newly initialized quantity type identifier using the provided string.

### Type Properties

- [heartRateVariabilityRMSSD](hkquantitytypeidentifier/heartratevariabilityrmssd.md)

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Creating quantity types

- [quantityType(forIdentifier:)](hkobjecttype/quantitytype%28foridentifier_%29.md): Deprecated. Returns the shared quantity type for the provided identifier.

# HKQuantityTypeIdentifier (Objective-C)

**Framework:** HealthKit  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS · watchOS

The identifiers that create quantity type objects.

## Declaration

```objectivec
typedef NSString * HKQuantityTypeIdentifier;
```

<a id="overview"></a>

## Overview

To create an [HKQuantityType](hkquantitytype.md) instance, pass an [HKQuantityTypeIdentifier](hkquantitytypeidentifier.md) value to the [quantityTypeForIdentifier:](hkobjecttype/quantitytype%28foridentifier_%29.md) method.

## Topics

### Activity

- [HKQuantityTypeIdentifierStepCount](hkquantitytypeidentifier/stepcount.md): A quantity sample type that measures the number of steps the user has taken.
- [HKQuantityTypeIdentifierDistanceWalkingRunning](hkquantitytypeidentifier/distancewalkingrunning.md): A quantity sample type that measures the distance the user has moved by walking or running.
- [HKQuantityTypeIdentifierRunningGroundContactTime](hkquantitytypeidentifier/runninggroundcontacttime.md): A quantity sample type that measures the amount of time the runner’s foot is in contact with the ground while running.
- [HKQuantityTypeIdentifierRunningPower](hkquantitytypeidentifier/runningpower.md): A quantity sample type that measures the rate of work required for the runner to maintain their speed.
- [HKQuantityTypeIdentifierRunningSpeed](hkquantitytypeidentifier/runningspeed.md): A quantity sample type that measures the runner’s speed.
- [HKQuantityTypeIdentifierRunningStrideLength](hkquantitytypeidentifier/runningstridelength.md): A quantity sample type that measures the distance covered by a single step while running.
- [HKQuantityTypeIdentifierRunningVerticalOscillation](hkquantitytypeidentifier/runningverticaloscillation.md): A quantity sample type measuring pelvis vertical range of motion during a single running stride.
- [HKQuantityTypeIdentifierDistanceCycling](hkquantitytypeidentifier/distancecycling.md): A quantity sample type that measures the distance the user has moved by cycling.
- [HKQuantityTypeIdentifierPushCount](hkquantitytypeidentifier/pushcount.md): A quantity sample type that measures the number of pushes that the user has performed while using a wheelchair.
- [HKQuantityTypeIdentifierDistanceWheelchair](hkquantitytypeidentifier/distancewheelchair.md): A quantity sample type that measures the distance the user has moved using a wheelchair.
- [HKQuantityTypeIdentifierSwimmingStrokeCount](hkquantitytypeidentifier/swimmingstrokecount.md): A quantity sample type that measures the number of strokes performed while swimming.
- [HKQuantityTypeIdentifierDistanceSwimming](hkquantitytypeidentifier/distanceswimming.md): A quantity sample type that measures the distance the user has moved while swimming.
- [HKQuantityTypeIdentifierDistanceDownhillSnowSports](hkquantitytypeidentifier/distancedownhillsnowsports.md): A quantity sample type that measures the distance the user has traveled while skiing or snowboarding.
- [HKQuantityTypeIdentifierBasalEnergyBurned](hkquantitytypeidentifier/basalenergyburned.md): A quantity sample type that measures the resting energy burned by the user.
- [HKQuantityTypeIdentifierActiveEnergyBurned](hkquantitytypeidentifier/activeenergyburned.md): A quantity sample type that measures the amount of active energy the user has burned.
- [HKQuantityTypeIdentifierFlightsClimbed](hkquantitytypeidentifier/flightsclimbed.md): A quantity sample type that measures the number flights of stairs that the user has climbed.
- [HKQuantityTypeIdentifierNikeFuel](hkquantitytypeidentifier/nikefuel.md): A quantity sample type that measures the number of NikeFuel points the user has earned.
- [HKQuantityTypeIdentifierAppleExerciseTime](hkquantitytypeidentifier/appleexercisetime.md): A quantity sample type that measures the amount of time the user spent exercising.
- [HKQuantityTypeIdentifierAppleMoveTime](hkquantitytypeidentifier/applemovetime.md): A quantity sample type that measures the amount of time the user has spent performing activities that involve full-body movements during the specified day.
- [HKQuantityTypeIdentifierAppleStandTime](hkquantitytypeidentifier/applestandtime.md): A quantity sample type that measures the amount of time the user has spent standing.
- [HKQuantityTypeIdentifierVO2Max](hkquantitytypeidentifier/vo2max.md): A quantity sample that measures the maximal oxygen consumption during exercise.
- [HKQuantityTypeIdentifierCrossCountrySkiingSpeed](hkquantitytypeidentifier/crosscountryskiingspeed.md): A quantity sample type that measures how fast you are traveling while cross country skiing.
- [HKQuantityTypeIdentifierCyclingCadence](hkquantitytypeidentifier/cyclingcadence.md): A quantity sample type that represents the rate at which the user is pedaling.
- [HKQuantityTypeIdentifierCyclingFunctionalThresholdPower](hkquantitytypeidentifier/cyclingfunctionalthresholdpower.md): A quantity sample type that measures the estimated maximum average power sustained while riding a bike for 60 minutes.
- [HKQuantityTypeIdentifierCyclingPower](hkquantitytypeidentifier/cyclingpower.md): A quantity sample type that measures the estimated power being used while riding a bike.
- [HKQuantityTypeIdentifierCyclingSpeed](hkquantitytypeidentifier/cyclingspeed.md): A quantity sample type that measures how fast you are traveling while riding a bike.
- [HKQuantityTypeIdentifierDistanceCrossCountrySkiing](hkquantitytypeidentifier/distancecrosscountryskiing.md): A quantity sample type that measures the distance the user has moved by cross country skiing.
- [HKQuantityTypeIdentifierDistancePaddleSports](hkquantitytypeidentifier/distancepaddlesports.md): A quantity sample type that measures the distance the user has moved by paddling sports.
- [HKQuantityTypeIdentifierDistanceRowing](hkquantitytypeidentifier/distancerowing.md): A quantity sample type that measures the distance the user has moved by rowing.
- [HKQuantityTypeIdentifierDistanceSkatingSports](hkquantitytypeidentifier/distanceskatingsports.md): A quantity sample type that measures the distance the user has moved by skating.
- [HKQuantityTypeIdentifierEstimatedWorkoutEffortScore](hkquantitytypeidentifier/estimatedworkouteffortscore.md)
- [HKQuantityTypeIdentifierPaddleSportsSpeed](hkquantitytypeidentifier/paddlesportsspeed.md): A quantity sample type that measures the distance the user has moved by paddling sports.
- [HKQuantityTypeIdentifierPhysicalEffort](hkquantitytypeidentifier/physicaleffort.md): A quantity sample type that measures the estimated amount of energy being used to perform a task excluding other factors such as temperature, altitude, or heart rate.
- [HKQuantityTypeIdentifierRowingSpeed](hkquantitytypeidentifier/rowingspeed.md): A quantity sample type that measures how fast the rower is moving.
- [HKQuantityTypeIdentifierWorkoutEffortScore](hkquantitytypeidentifier/workouteffortscore.md)

### Body measurements

- [HKQuantityTypeIdentifierHeight](hkquantitytypeidentifier/height.md): A quantity sample type that measures the user’s height.
- [HKQuantityTypeIdentifierBodyMass](hkquantitytypeidentifier/bodymass.md): A quantity sample type that measures the user’s weight.
- [HKQuantityTypeIdentifierBodyMassIndex](hkquantitytypeidentifier/bodymassindex.md): A quantity sample type that measures the user’s body mass index.
- [HKQuantityTypeIdentifierLeanBodyMass](hkquantitytypeidentifier/leanbodymass.md): A quantity sample type that measures the user’s lean body mass.
- [HKQuantityTypeIdentifierBodyFatPercentage](hkquantitytypeidentifier/bodyfatpercentage.md): A quantity sample type that measures the user’s body fat percentage.
- [HKQuantityTypeIdentifierWaistCircumference](hkquantitytypeidentifier/waistcircumference.md): A quantity sample type that measures the user’s waist circumference.
- [HKQuantityTypeIdentifierAppleSleepingWristTemperature](hkquantitytypeidentifier/applesleepingwristtemperature.md): A quantity sample type that records the wrist temperature during sleep.

### Reproductive health

- [HKQuantityTypeIdentifierBasalBodyTemperature](hkquantitytypeidentifier/basalbodytemperature.md): A quantity sample type that records the user’s basal body temperature.

### Hearing

- [HKQuantityTypeIdentifierEnvironmentalAudioExposure](hkquantitytypeidentifier/environmentalaudioexposure.md): A quantity sample type that measures audio exposure to sounds in the environment.
- [HKQuantityTypeIdentifierEnvironmentalSoundReduction](hkquantitytypeidentifier/environmentalsoundreduction.md): A quantity sample type that measures the difference in sound intensity when wearing headphones that lower environmental sound levels.
- [HKQuantityTypeIdentifierHeadphoneAudioExposure](hkquantitytypeidentifier/headphoneaudioexposure.md): A quantity sample type that measures audio exposure from headphones.

### Vital signs

- [HKQuantityTypeIdentifierHeartRate](hkquantitytypeidentifier/heartrate.md): A quantity sample type that measures the user’s heart rate.
- [HKQuantityTypeIdentifierRestingHeartRate](hkquantitytypeidentifier/restingheartrate.md): A quantity sample type that measures the user’s resting heart rate.
- [HKQuantityTypeIdentifierWalkingHeartRateAverage](hkquantitytypeidentifier/walkingheartrateaverage.md): A quantity sample type that measures the user’s heart rate while walking.
- [HKQuantityTypeIdentifierHeartRateVariabilitySDNN](hkquantitytypeidentifier/heartratevariabilitysdnn.md): A quantity sample type that measures the standard deviation of heartbeat intervals.
- [HKQuantityTypeIdentifierHeartRateRecoveryOneMinute](hkquantitytypeidentifier/heartraterecoveryoneminute.md): A quantity sample that records the reduction in heart rate from the peak exercise rate to the rate one minute after exercising ended.
- [HKQuantityTypeIdentifierAtrialFibrillationBurden](hkquantitytypeidentifier/atrialfibrillationburden.md): A quantity type that measures an estimate of the percentage of time a person’s heart shows signs of atrial fibrillation (AFib) while wearing Apple Watch.
- [HKQuantityTypeIdentifierOxygenSaturation](hkquantitytypeidentifier/oxygensaturation.md): A quantity sample type that measures the user’s oxygen saturation.
- [HKQuantityTypeIdentifierBodyTemperature](hkquantitytypeidentifier/bodytemperature.md): A quantity sample type that measures the user’s body temperature.
- [HKQuantityTypeIdentifierBloodPressureDiastolic](hkquantitytypeidentifier/bloodpressurediastolic.md): A quantity sample type that measures the user’s diastolic blood pressure.
- [HKQuantityTypeIdentifierBloodPressureSystolic](hkquantitytypeidentifier/bloodpressuresystolic.md): A quantity sample type that measures the user’s systolic blood pressure.
- [HKQuantityTypeIdentifierRespiratoryRate](hkquantitytypeidentifier/respiratoryrate.md): A quantity sample type that measures the user’s respiratory rate.

### Lab and test results

- [HKQuantityTypeIdentifierBloodGlucose](hkquantitytypeidentifier/bloodglucose.md): A quantity sample type that measures the user’s blood glucose level.
- [HKQuantityTypeIdentifierElectrodermalActivity](hkquantitytypeidentifier/electrodermalactivity.md): A quantity sample type that measures electrodermal activity.
- [HKQuantityTypeIdentifierForcedExpiratoryVolume1](hkquantitytypeidentifier/forcedexpiratoryvolume1.md): A quantity sample type that measures the amount of air that can be forcibly exhaled from the lungs during the first second of a forced exhalation.
- [HKQuantityTypeIdentifierForcedVitalCapacity](hkquantitytypeidentifier/forcedvitalcapacity.md): A quantity sample type that measures the amount of air that can be forcibly exhaled from the lungs after taking the deepest breath possible.
- [HKQuantityTypeIdentifierInhalerUsage](hkquantitytypeidentifier/inhalerusage.md): A quantity sample type that measures the number of puffs the user takes from their inhaler.
- [HKQuantityTypeIdentifierInsulinDelivery](hkquantitytypeidentifier/insulindelivery.md): A quantity sample that measures the amount of insulin delivered.
- [HKQuantityTypeIdentifierNumberOfTimesFallen](hkquantitytypeidentifier/numberoftimesfallen.md): A quantity sample type that measures the number of times the user fell.
- [HKQuantityTypeIdentifierPeakExpiratoryFlowRate](hkquantitytypeidentifier/peakexpiratoryflowrate.md): A quantity sample type that measures the user’s maximum flow rate generated during a forceful exhalation.
- [HKQuantityTypeIdentifierPeripheralPerfusionIndex](hkquantitytypeidentifier/peripheralperfusionindex.md): A quantity sample type that measures the user’s peripheral perfusion index.

### Mindfulness and Sleep

- [HKQuantityTypeIdentifierAppleSleepingWristTemperature](hkquantitytypeidentifier/applesleepingwristtemperature.md): A quantity sample type that records the wrist temperature during sleep.
- [HKQuantityTypeIdentifierAppleSleepingBreathingDisturbances](hkquantitytypeidentifier/applesleepingbreathingdisturbances.md)

### Nutrition

- [HKQuantityTypeIdentifierDietaryBiotin](hkquantitytypeidentifier/dietarybiotin.md): A quantity sample type that measures the amount of biotin (vitamin B7) consumed.
- [HKQuantityTypeIdentifierDietaryCaffeine](hkquantitytypeidentifier/dietarycaffeine.md): A quantity sample type that measures the amount of caffeine consumed.
- [HKQuantityTypeIdentifierDietaryCalcium](hkquantitytypeidentifier/dietarycalcium.md): A quantity sample type that measures the amount of calcium consumed.
- [HKQuantityTypeIdentifierDietaryCarbohydrates](hkquantitytypeidentifier/dietarycarbohydrates.md): A quantity sample type that measures the amount of carbohydrates consumed.
- [HKQuantityTypeIdentifierDietaryChloride](hkquantitytypeidentifier/dietarychloride.md): A quantity sample type that measures the amount of chloride consumed.
- [HKQuantityTypeIdentifierDietaryCholesterol](hkquantitytypeidentifier/dietarycholesterol.md): A quantity sample type that measures the amount of cholesterol consumed.
- [HKQuantityTypeIdentifierDietaryChromium](hkquantitytypeidentifier/dietarychromium.md): A quantity sample type that measures the amount of chromium consumed.
- [HKQuantityTypeIdentifierDietaryCopper](hkquantitytypeidentifier/dietarycopper.md): A quantity sample type that measures the amount of copper consumed.
- [HKQuantityTypeIdentifierDietaryEnergyConsumed](hkquantitytypeidentifier/dietaryenergyconsumed.md): A quantity sample type that measures the amount of energy consumed.
- [HKQuantityTypeIdentifierDietaryFatMonounsaturated](hkquantitytypeidentifier/dietaryfatmonounsaturated.md): A quantity sample type that measures the amount of monounsaturated fat consumed.
- [HKQuantityTypeIdentifierDietaryFatPolyunsaturated](hkquantitytypeidentifier/dietaryfatpolyunsaturated.md): A quantity sample type that measures the amount of polyunsaturated fat consumed.
- [HKQuantityTypeIdentifierDietaryFatSaturated](hkquantitytypeidentifier/dietaryfatsaturated.md): A quantity sample type that measures the amount of saturated fat consumed.
- [HKQuantityTypeIdentifierDietaryFatTotal](hkquantitytypeidentifier/dietaryfattotal.md): A quantity sample type that measures the total amount of fat consumed.
- [HKQuantityTypeIdentifierDietaryFiber](hkquantitytypeidentifier/dietaryfiber.md): A quantity sample type that measures the amount of fiber consumed.
- [HKQuantityTypeIdentifierDietaryFolate](hkquantitytypeidentifier/dietaryfolate.md): A quantity sample type that measures the amount of folate (folic acid) consumed.
- [HKQuantityTypeIdentifierDietaryIodine](hkquantitytypeidentifier/dietaryiodine.md): A quantity sample type that measures the amount of iodine consumed.
- [HKQuantityTypeIdentifierDietaryIron](hkquantitytypeidentifier/dietaryiron.md): A quantity sample type that measures the amount of iron consumed.
- [HKQuantityTypeIdentifierDietaryMagnesium](hkquantitytypeidentifier/dietarymagnesium.md): A quantity sample type that measures the amount of magnesium consumed.
- [HKQuantityTypeIdentifierDietaryManganese](hkquantitytypeidentifier/dietarymanganese.md): A quantity sample type that measures the amount of manganese consumed.
- [HKQuantityTypeIdentifierDietaryMolybdenum](hkquantitytypeidentifier/dietarymolybdenum.md): A quantity sample type that measures the amount of molybdenum consumed.
- [HKQuantityTypeIdentifierDietaryNiacin](hkquantitytypeidentifier/dietaryniacin.md): A quantity sample type that measures the amount of niacin (vitamin B3) consumed.
- [HKQuantityTypeIdentifierDietaryPantothenicAcid](hkquantitytypeidentifier/dietarypantothenicacid.md): A quantity sample type that measures the amount of pantothenic acid (vitamin B5) consumed.
- [HKQuantityTypeIdentifierDietaryPhosphorus](hkquantitytypeidentifier/dietaryphosphorus.md): A quantity sample type that measures the amount of phosphorus consumed.
- [HKQuantityTypeIdentifierDietaryPotassium](hkquantitytypeidentifier/dietarypotassium.md): A quantity sample type that measures the amount of potassium consumed.
- [HKQuantityTypeIdentifierDietaryProtein](hkquantitytypeidentifier/dietaryprotein.md): A quantity sample type that measures the amount of protein consumed.
- [HKQuantityTypeIdentifierDietaryRiboflavin](hkquantitytypeidentifier/dietaryriboflavin.md): A quantity sample type that measures the amount of riboflavin (vitamin B2) consumed.
- [HKQuantityTypeIdentifierDietarySelenium](hkquantitytypeidentifier/dietaryselenium.md): A quantity sample type that measures the amount of selenium consumed.
- [HKQuantityTypeIdentifierDietarySodium](hkquantitytypeidentifier/dietarysodium.md): A quantity sample type that measures the amount of sodium consumed.
- [HKQuantityTypeIdentifierDietarySugar](hkquantitytypeidentifier/dietarysugar.md): A quantity sample type that measures the amount of sugar consumed.
- [HKQuantityTypeIdentifierDietaryThiamin](hkquantitytypeidentifier/dietarythiamin.md): A quantity sample type that measures the amount of thiamin (vitamin B1) consumed.
- [HKQuantityTypeIdentifierDietaryVitaminA](hkquantitytypeidentifier/dietaryvitamina.md): A quantity sample type that measures the amount of vitamin A consumed.
- [HKQuantityTypeIdentifierDietaryVitaminB12](hkquantitytypeidentifier/dietaryvitaminb12.md): A quantity sample type that measures the amount of cyanocobalamin (vitamin B12) consumed.
- [HKQuantityTypeIdentifierDietaryVitaminB6](hkquantitytypeidentifier/dietaryvitaminb6.md): A quantity sample type that measures the amount of pyridoxine (vitamin B6) consumed.
- [HKQuantityTypeIdentifierDietaryVitaminC](hkquantitytypeidentifier/dietaryvitaminc.md): A quantity sample type that measures the amount of vitamin C consumed.
- [HKQuantityTypeIdentifierDietaryVitaminD](hkquantitytypeidentifier/dietaryvitamind.md): A quantity sample type that measures the amount of vitamin D consumed.
- [HKQuantityTypeIdentifierDietaryVitaminE](hkquantitytypeidentifier/dietaryvitamine.md): A quantity sample type that measures the amount of vitamin E consumed.
- [HKQuantityTypeIdentifierDietaryVitaminK](hkquantitytypeidentifier/dietaryvitamink.md): A quantity sample type that measures the amount of vitamin K consumed.
- [HKQuantityTypeIdentifierDietaryWater](hkquantitytypeidentifier/dietarywater.md): A quantity sample type that measures the amount of water consumed.
- [HKQuantityTypeIdentifierDietaryZinc](hkquantitytypeidentifier/dietaryzinc.md): A quantity sample type that measures the amount of zinc consumed.

### Alcohol consumption

- [HKQuantityTypeIdentifierBloodAlcoholContent](hkquantitytypeidentifier/bloodalcoholcontent.md): A quantity sample type that measures the user’s blood alcohol content.
- [HKQuantityTypeIdentifierNumberOfAlcoholicBeverages](hkquantitytypeidentifier/numberofalcoholicbeverages.md): A quantity sample type that measures the number of standard alcoholic drinks that the user has consumed.

### Mobility

- [HKQuantityTypeIdentifierAppleWalkingSteadiness](hkquantitytypeidentifier/applewalkingsteadiness.md): A quantity sample type that measures the steadiness of the user’s gait.
- [HKQuantityTypeIdentifierSixMinuteWalkTestDistance](hkquantitytypeidentifier/sixminutewalktestdistance.md): A quantity sample type that stores the distance a user can walk during a six-minute walk test.
- [HKQuantityTypeIdentifierWalkingSpeed](hkquantitytypeidentifier/walkingspeed.md): A quantity sample type that measures the user’s average speed when walking steadily over flat ground.
- [HKQuantityTypeIdentifierWalkingStepLength](hkquantitytypeidentifier/walkingsteplength.md): A quantity sample type that measures the average length of the user’s step when walking steadily over flat ground.
- [HKQuantityTypeIdentifierWalkingAsymmetryPercentage](hkquantitytypeidentifier/walkingasymmetrypercentage.md): A quantity sample type that measures the percentage of steps in which one foot moves at a different speed than the other when walking on flat ground.
- [HKQuantityTypeIdentifierWalkingDoubleSupportPercentage](hkquantitytypeidentifier/walkingdoublesupportpercentage.md): A quantity sample type that measures the percentage of time when both of the user’s feet touch the ground while walking steadily over flat ground.
- [HKQuantityTypeIdentifierStairAscentSpeed](hkquantitytypeidentifier/stairascentspeed.md): A quantity sample type measuring the user’s speed while climbing a flight of stairs.
- [HKQuantityTypeIdentifierStairDescentSpeed](hkquantitytypeidentifier/stairdescentspeed.md): A quantity sample type measuring the user’s speed while descending a flight of stairs.

### UV exposure

- [HKQuantityTypeIdentifierTimeInDaylight](hkquantitytypeidentifier/timeindaylight.md): A quantity sample type that measures amount of time the user spent in daylight.
- [HKQuantityTypeIdentifierUVExposure](hkquantitytypeidentifier/uvexposure.md): A quantity sample type that measures the user’s exposure to UV radiation.

### Diving

- [HKQuantityTypeIdentifierUnderwaterDepth](hkquantitytypeidentifier/underwaterdepth.md): A quantity sample that records a person’s depth underwater.
- [HKQuantityTypeIdentifierWaterTemperature](hkquantitytypeidentifier/watertemperature.md): A quantity sample that records the water temperature.

## See Also

### Creating quantity types

- [quantityTypeForIdentifier:](hkobjecttype/quantitytype%28foridentifier_%29.md): Deprecated. Returns the shared quantity type for the provided identifier.
