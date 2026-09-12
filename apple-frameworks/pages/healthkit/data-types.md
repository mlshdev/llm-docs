> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/data-types](https://developer.apple.com/documentation/healthkit/data-types)

# Data types (Swift)

**Framework:** HealthKit  
**Kind:** API Collection

Specify the kind of data used in HealthKit.

<a id="overview"></a>

## Overview

HealthKit uses [HKObjectType](hkobjecttype.md) subclasses to identify the different types of data stored in HealthKit, from inherent data that doesn’t typically change over time to complex data types that combine multiple samples or compute values over sets of samples.

To create a type object, call the appropriate [HKObjectType](hkobjecttype.md) class method, and pass in the desired type identifier.

```swift
let bloodType = HKObjectType.characteristicType(forIdentifier: .bloodType)

let caloriesConsumed = HKObjectType.quantityType(forIdentifier: .dietaryEnergyConsumed)

let sleepAnalysis = HKObjectType.categoryType(forIdentifier: .sleepAnalysis)
```

You can use the resulting object types to request permission to access the data, save new data to the HealthKit store, or read data from the HealthKit store.

## Topics

### Object type subclasses

- [HKCharacteristicType](hkcharacteristictype.md): A type that represents data that doesn’t typically change over time.
- [HKQuantityType](hkquantitytype.md): A type that identifies samples that store numerical values.
- [HKCategoryType](hkcategorytype.md): A type that identifies samples that contain a value from a small set of possible values.
- [HKCorrelationType](hkcorrelationtype.md): A type that identifies samples that group multiple subsamples.
- [HKActivitySummaryType](hkactivitysummarytype.md): A type that identifies activity summary objects.
- [HKAudiogramSampleType](hkaudiogramsampletype.md): A type that identifies samples that contain audiogram data.
- [HKElectrocardiogramType](hkelectrocardiogramtype.md): A type that identifies samples containing electrocardiogram data.
- [HKSeriesType](hkseriestype.md): A type that indicates the data stored in a series sample.
- [HKClinicalType](hkclinicaltype.md): A type that identifies samples that contain clinical record data.
- [HKWorkoutType](hkworkouttype.md): A type that identifies samples that store information about a workout.
- [HKObjectType](hkobjecttype.md): An abstract superclass with subclasses that identify a specific type of data for the HealthKit store.
- [HKSampleType](hksampletype.md): An abstract superclass for all classes that identify a specific type of sample when working with the HealthKit store.

### Characteristic identifiers

- [activityMoveMode](hkcharacteristictypeidentifier/activitymovemode.md): A characteristic identifier for the user’s activity mode.
- [biologicalSex](hkcharacteristictypeidentifier/biologicalsex.md): A characteristic type identifier for the user’s sex.
- [bloodType](hkcharacteristictypeidentifier/bloodtype.md): A characteristic type identifier for the user’s blood type.
- [dateOfBirth](hkcharacteristictypeidentifier/dateofbirth.md): A characteristic type identifier for the user’s date of birth.
- [fitzpatrickSkinType](hkcharacteristictypeidentifier/fitzpatrickskintype.md): A characteristic type identifier for the user’s skin type.
- [wheelchairUse](hkcharacteristictypeidentifier/wheelchairuse.md): A characteristic identifier for the user’s use of a wheelchair.

### Activity

- [stepCount](hkquantitytypeidentifier/stepcount.md): A quantity sample type that measures the number of steps the user has taken.
- [distanceWalkingRunning](hkquantitytypeidentifier/distancewalkingrunning.md): A quantity sample type that measures the distance the user has moved by walking or running.
- [runningSpeed](hkquantitytypeidentifier/runningspeed.md): A quantity sample type that measures the runner’s speed.
- [runningStrideLength](hkquantitytypeidentifier/runningstridelength.md): A quantity sample type that measures the distance covered by a single step while running.
- [runningPower](hkquantitytypeidentifier/runningpower.md): A quantity sample type that measures the rate of work required for the runner to maintain their speed.
- [runningGroundContactTime](hkquantitytypeidentifier/runninggroundcontacttime.md): A quantity sample type that measures the amount of time the runner’s foot is in contact with the ground while running.
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
- [appleStandHour](hkcategorytypeidentifier/applestandhour.md): A category sample type that counts the number of hours in the day during which the user has stood and moved for at least one minute per hour.
- [appleStandTime](hkquantitytypeidentifier/applestandtime.md): A quantity sample type that measures the amount of time the user has spent standing.
- [vo2Max](hkquantitytypeidentifier/vo2max.md): A quantity sample that measures the maximal oxygen consumption during exercise.
- [lowCardioFitnessEvent](hkcategorytypeidentifier/lowcardiofitnessevent.md): An event that indicates the user’s VO2 max values consistently fall below a particular aerobic fitness threshold.

### Attachments

- [HKAttachment](hkattachment.md): A file that is attached to a sample in the HealthKit store.
- [HKAttachmentStore](hkattachmentstore.md): The access point for attachments associated with samples in the HealthKit store.
- [HKAttachmentDataReader](hkattachmentdatareader.md): A reader that provides access to an attachment’s data.

### Body measurements

- [height](hkquantitytypeidentifier/height.md): A quantity sample type that measures the user’s height.
- [bodyMass](hkquantitytypeidentifier/bodymass.md): A quantity sample type that measures the user’s weight.
- [bodyMassIndex](hkquantitytypeidentifier/bodymassindex.md): A quantity sample type that measures the user’s body mass index.
- [leanBodyMass](hkquantitytypeidentifier/leanbodymass.md): A quantity sample type that measures the user’s lean body mass.
- [bodyFatPercentage](hkquantitytypeidentifier/bodyfatpercentage.md): A quantity sample type that measures the user’s body fat percentage.
- [waistCircumference](hkquantitytypeidentifier/waistcircumference.md): A quantity sample type that measures the user’s waist circumference.

### Reproductive health

- [menstrualFlow](hkcategorytypeidentifier/menstrualflow.md): A category sample type that records menstrual cycles.
- [intermenstrualBleeding](hkcategorytypeidentifier/intermenstrualbleeding.md): A category sample type that records spotting outside the normal menstruation period.
- [infrequentMenstrualCycles](hkcategorytypeidentifier/infrequentmenstrualcycles.md): A category sample that indicates an infrequent menstrual cycle.
- [irregularMenstrualCycles](hkcategorytypeidentifier/irregularmenstrualcycles.md): A category sample that indicates an irregular menstrual cycle.
- [persistentIntermenstrualBleeding](hkcategorytypeidentifier/persistentintermenstrualbleeding.md): A category sample that indicates persistent intermenstrual bleeding.
- [prolongedMenstrualPeriods](hkcategorytypeidentifier/prolongedmenstrualperiods.md): A category sample that indicates a prolonged menstrual cycle.
- [basalBodyTemperature](hkquantitytypeidentifier/basalbodytemperature.md): A quantity sample type that records the user’s basal body temperature.
- [cervicalMucusQuality](hkcategorytypeidentifier/cervicalmucusquality.md): A category sample type that records the quality of the user’s cervical mucus.
- [ovulationTestResult](hkcategorytypeidentifier/ovulationtestresult.md): A category sample type that records the result of an ovulation home test.
- [progesteroneTestResult](hkcategorytypeidentifier/progesteronetestresult.md): A category type that represents the results from a home progesterone test.
- [sexualActivity](hkcategorytypeidentifier/sexualactivity.md): A category sample type that records sexual activity.
- [contraceptive](hkcategorytypeidentifier/contraceptive.md): A category sample type that records the use of contraceptives.
- [pregnancy](hkcategorytypeidentifier/pregnancy.md): A category type that records pregnancy.
- [pregnancyTestResult](hkcategorytypeidentifier/pregnancytestresult.md): A category type that represents the results from a home pregnancy test.
- [lactation](hkcategorytypeidentifier/lactation.md): A category type that records lactation.
- [HKCategoryValueVaginalBleeding](hkcategoryvaluevaginalbleeding.md): A value that indicates the intensity of vaginal bleeding.

### Menopause

- [Recording and querying menopausal state](recording-and-querying-menopausal-state.md): Personalize someone’s experience on a health app by tracking the information they record on menopausal state.
- [menopausalState](hkcategorytypeidentifier/menopausalstate.md): An identifier for samples that record a person’s menopausal state.
- [bleedingAfterMenopause](hkcategorytypeidentifier/bleedingaftermenopause.md): An identifier for samples that record bleeding after menopause.
- [HKCategoryValueMenopausalState](hkcategoryvaluemenopausalstate.md): A value that indicates the menopausal state at a recorded point in time.

### Hearing

- [environmentalAudioExposure](hkquantitytypeidentifier/environmentalaudioexposure.md): A quantity sample type that measures audio exposure to sounds in the environment.
- [headphoneAudioExposure](hkquantitytypeidentifier/headphoneaudioexposure.md): A quantity sample type that measures audio exposure from headphones.
- [environmentalAudioExposureEvent](hkcategorytypeidentifier/environmentalaudioexposureevent.md): A category sample type that records exposure to potentially damaging sounds from the environment.
- [headphoneAudioExposureEvent](hkcategorytypeidentifier/headphoneaudioexposureevent.md): A category sample type that records exposure to potentially damaging sounds from headphones.
- [audioExposureEvent](hkcategorytypeidentifier/audioexposureevent.md): Deprecated. A category sample type for audio exposure events.

### Vital signs

- [heartRate](hkquantitytypeidentifier/heartrate.md): A quantity sample type that measures the user’s heart rate.
- [lowHeartRateEvent](hkcategorytypeidentifier/lowheartrateevent.md): A category sample type for low heart rate events.
- [highHeartRateEvent](hkcategorytypeidentifier/highheartrateevent.md): A category sample type for high heart rate events.
- [irregularHeartRhythmEvent](hkcategorytypeidentifier/irregularheartrhythmevent.md): A category sample type for irregular heart rhythm events.
- [restingHeartRate](hkquantitytypeidentifier/restingheartrate.md): A quantity sample type that measures the user’s resting heart rate.
- [heartRateVariabilitySDNN](hkquantitytypeidentifier/heartratevariabilitysdnn.md): A quantity sample type that measures the standard deviation of heartbeat intervals.
- [heartRateRecoveryOneMinute](hkquantitytypeidentifier/heartraterecoveryoneminute.md): A quantity sample that records the reduction in heart rate from the peak exercise rate to the rate one minute after exercising ended.
- [atrialFibrillationBurden](hkquantitytypeidentifier/atrialfibrillationburden.md): A quantity type that measures an estimate of the percentage of time a person’s heart shows signs of atrial fibrillation (AFib) while wearing Apple Watch.
- [walkingHeartRateAverage](hkquantitytypeidentifier/walkingheartrateaverage.md): A quantity sample type that measures the user’s heart rate while walking.
- [HKDataTypeIdentifierHeartbeatSeries](hkdatatypeidentifierheartbeatseries.md): A series sample containing heartbeat data.
- [HKElectrocardiogramType](hkelectrocardiogramtype.md): A type that identifies samples containing electrocardiogram data.
- [oxygenSaturation](hkquantitytypeidentifier/oxygensaturation.md): A quantity sample type that measures the user’s oxygen saturation.
- [bodyTemperature](hkquantitytypeidentifier/bodytemperature.md): A quantity sample type that measures the user’s body temperature.
- [bloodPressure](hkcorrelationtypeidentifier/bloodpressure.md): A correlation sample that combines a systolic sample and a diastolic sample into a single blood pressure reading.
- [bloodPressureSystolic](hkquantitytypeidentifier/bloodpressuresystolic.md): A quantity sample type that measures the user’s systolic blood pressure.
- [bloodPressureDiastolic](hkquantitytypeidentifier/bloodpressurediastolic.md): A quantity sample type that measures the user’s diastolic blood pressure.
- [respiratoryRate](hkquantitytypeidentifier/respiratoryrate.md): A quantity sample type that measures the user’s respiratory rate.

### Nutrition

- [Nutrition Type Identifiers](nutrition-type-identifiers.md): Type identifiers used for tracking diet and nutrition.

### Alcohol consumption

- [bloodAlcoholContent](hkquantitytypeidentifier/bloodalcoholcontent.md): A quantity sample type that measures the user’s blood alcohol content.
- [numberOfAlcoholicBeverages](hkquantitytypeidentifier/numberofalcoholicbeverages.md): A quantity sample type that measures the number of standard alcoholic drinks that the user has consumed.

### Mobility

- [appleWalkingSteadiness](hkquantitytypeidentifier/applewalkingsteadiness.md): A quantity sample type that measures the steadiness of the user’s gait.
- [appleWalkingSteadinessEvent](hkcategorytypeidentifier/applewalkingsteadinessevent.md): A category sample type that records an incident where the user showed a reduced score for their gait’s steadiness.
- [sixMinuteWalkTestDistance](hkquantitytypeidentifier/sixminutewalktestdistance.md): A quantity sample type that stores the distance a user can walk during a six-minute walk test.
- [walkingSpeed](hkquantitytypeidentifier/walkingspeed.md): A quantity sample type that measures the user’s average speed when walking steadily over flat ground.
- [walkingStepLength](hkquantitytypeidentifier/walkingsteplength.md): A quantity sample type that measures the average length of the user’s step when walking steadily over flat ground.
- [walkingAsymmetryPercentage](hkquantitytypeidentifier/walkingasymmetrypercentage.md): A quantity sample type that measures the percentage of steps in which one foot moves at a different speed than the other when walking on flat ground.
- [walkingDoubleSupportPercentage](hkquantitytypeidentifier/walkingdoublesupportpercentage.md): A quantity sample type that measures the percentage of time when both of the user’s feet touch the ground while walking steadily over flat ground.
- [stairAscentSpeed](hkquantitytypeidentifier/stairascentspeed.md): A quantity sample type measuring the user’s speed while climbing a flight of stairs.
- [stairDescentSpeed](hkquantitytypeidentifier/stairdescentspeed.md): A quantity sample type measuring the user’s speed while descending a flight of stairs.

### Symptoms

- [Symptom Type Identifiers](symptom-type-identifiers.md): Identifiers for medical symptoms.

### Lab and test results

- [bloodAlcoholContent](hkquantitytypeidentifier/bloodalcoholcontent.md): A quantity sample type that measures the user’s blood alcohol content.
- [bloodGlucose](hkquantitytypeidentifier/bloodglucose.md): A quantity sample type that measures the user’s blood glucose level.
- [electrodermalActivity](hkquantitytypeidentifier/electrodermalactivity.md): A quantity sample type that measures electrodermal activity.
- [forcedExpiratoryVolume1](hkquantitytypeidentifier/forcedexpiratoryvolume1.md): A quantity sample type that measures the amount of air that can be forcibly exhaled from the lungs during the first second of a forced exhalation.
- [forcedVitalCapacity](hkquantitytypeidentifier/forcedvitalcapacity.md): A quantity sample type that measures the amount of air that can be forcibly exhaled from the lungs after taking the deepest breath possible.
- [inhalerUsage](hkquantitytypeidentifier/inhalerusage.md): A quantity sample type that measures the number of puffs the user takes from their inhaler.
- [insulinDelivery](hkquantitytypeidentifier/insulindelivery.md): A quantity sample that measures the amount of insulin delivered.
- [numberOfTimesFallen](hkquantitytypeidentifier/numberoftimesfallen.md): A quantity sample type that measures the number of times the user fell.
- [peakExpiratoryFlowRate](hkquantitytypeidentifier/peakexpiratoryflowrate.md): A quantity sample type that measures the user’s maximum flow rate generated during a forceful exhalation.
- [peripheralPerfusionIndex](hkquantitytypeidentifier/peripheralperfusionindex.md): A quantity sample type that measures the user’s peripheral perfusion index.

### Mindfulness and sleep

- [mindfulSession](hkcategorytypeidentifier/mindfulsession.md): A category sample type for recording a mindful session.
- [sleepAnalysis](hkcategorytypeidentifier/sleepanalysis.md): A category sample type for sleep analysis information.
- [appleSleepingWristTemperature](hkquantitytypeidentifier/applesleepingwristtemperature.md): A quantity sample type that records the wrist temperature during sleep.
- [HKAppleSleepingBreathingDisturbancesClassification](hkapplesleepingbreathingdisturbancesclassification.md)

### Self care

- [toothbrushingEvent](hkcategorytypeidentifier/toothbrushingevent.md): A category sample type for toothbrushing events.
- [handwashingEvent](hkcategorytypeidentifier/handwashingevent.md): A category sample type for handwashing events.

### Workouts

- [HKWorkoutTypeIdentifier](hkworkouttypeidentifier.md): The workout type identifier.
- [HKWorkoutRouteTypeIdentifier](hkworkoutroutetypeidentifier.md): A series sample containing location data that defines the route the user took during a workout.

### Clinical records

- [HKClinicalTypeIdentifier](hkclinicaltypeidentifier.md): A type identifier for the different categories of clinical records.

### UV exposure

- [uvExposure](hkquantitytypeidentifier/uvexposure.md): A quantity sample type that measures the user’s exposure to UV radiation.

### Vision

- [HKVisionPrescriptionTypeIdentifier](hkvisionprescriptiontypeidentifier.md): A type identifier for vision prescription samples.

### Diving

- [underwaterDepth](hkquantitytypeidentifier/underwaterdepth.md): A quantity sample that records a person’s depth underwater.
- [waterTemperature](hkquantitytypeidentifier/watertemperature.md): A quantity sample that records the water temperature.

### Utilities

- [BufferedAsyncByteIterator](bufferedasyncbyteiterator.md): An asynchronous iterator for byte data.

## See Also

### Health data

- [Saving data to HealthKit](saving-data-to-healthkit.md): Create and share HealthKit samples.
- [Reading data from HealthKit](reading-data-from-healthkit.md): Use queries to request sample data from HealthKit.
- [HKHealthStore](hkhealthstore.md): The access point for all data managed by HealthKit.
- [Creating a Mobility Health App](creating-a-mobility-health-app.md): Create a health app that allows a clinical care team to send and receive mobility data.
- [Samples](samples.md): Create and save health and fitness samples.
- [Queries](queries.md): Query health and fitness data.
- [Visualizing HealthKit State of Mind in visionOS](visualizing-healthkit-state-of-mind-in-visionos.md): Incorporate HealthKit State of Mind into your app and visualize the data in visionOS.
- [Logging symptoms associated with a medication](logging-symptoms-associated-with-a-medication.md): Fetch medications and dose events from the HealthKit store, and create symptom samples to associate with them.

# Data types (Objective-C)

**Framework:** HealthKit  
**Kind:** API Collection

Specify the kind of data used in HealthKit.

<a id="overview"></a>

## Overview

HealthKit uses [HKObjectType](hkobjecttype.md) subclasses to identify the different types of data stored in HealthKit, from inherent data that doesn’t typically change over time to complex data types that combine multiple samples or compute values over sets of samples.

To create a type object, call the appropriate [HKObjectType](hkobjecttype.md) class method, and pass in the desired type identifier.

```swift
let bloodType = HKObjectType.characteristicType(forIdentifier: .bloodType)

let caloriesConsumed = HKObjectType.quantityType(forIdentifier: .dietaryEnergyConsumed)

let sleepAnalysis = HKObjectType.categoryType(forIdentifier: .sleepAnalysis)
```

You can use the resulting object types to request permission to access the data, save new data to the HealthKit store, or read data from the HealthKit store.

## Topics

### Object type subclasses

- [HKCharacteristicType](hkcharacteristictype.md): A type that represents data that doesn’t typically change over time.
- [HKQuantityType](hkquantitytype.md): A type that identifies samples that store numerical values.
- [HKCategoryType](hkcategorytype.md): A type that identifies samples that contain a value from a small set of possible values.
- [HKCorrelationType](hkcorrelationtype.md): A type that identifies samples that group multiple subsamples.
- [HKActivitySummaryType](hkactivitysummarytype.md): A type that identifies activity summary objects.
- [HKAudiogramSampleType](hkaudiogramsampletype.md): A type that identifies samples that contain audiogram data.
- [HKElectrocardiogramType](hkelectrocardiogramtype.md): A type that identifies samples containing electrocardiogram data.
- [HKSeriesType](hkseriestype.md): A type that indicates the data stored in a series sample.
- [HKClinicalType](hkclinicaltype.md): A type that identifies samples that contain clinical record data.
- [HKWorkoutType](hkworkouttype.md): A type that identifies samples that store information about a workout.
- [HKObjectType](hkobjecttype.md): An abstract superclass with subclasses that identify a specific type of data for the HealthKit store.
- [HKSampleType](hksampletype.md): An abstract superclass for all classes that identify a specific type of sample when working with the HealthKit store.

### Characteristic identifiers

- [HKCharacteristicTypeIdentifierActivityMoveMode](hkcharacteristictypeidentifier/activitymovemode.md): A characteristic identifier for the user’s activity mode.
- [HKCharacteristicTypeIdentifierBiologicalSex](hkcharacteristictypeidentifier/biologicalsex.md): A characteristic type identifier for the user’s sex.
- [HKCharacteristicTypeIdentifierBloodType](hkcharacteristictypeidentifier/bloodtype.md): A characteristic type identifier for the user’s blood type.
- [HKCharacteristicTypeIdentifierDateOfBirth](hkcharacteristictypeidentifier/dateofbirth.md): A characteristic type identifier for the user’s date of birth.
- [HKCharacteristicTypeIdentifierFitzpatrickSkinType](hkcharacteristictypeidentifier/fitzpatrickskintype.md): A characteristic type identifier for the user’s skin type.
- [HKCharacteristicTypeIdentifierWheelchairUse](hkcharacteristictypeidentifier/wheelchairuse.md): A characteristic identifier for the user’s use of a wheelchair.

### Activity

- [HKQuantityTypeIdentifierStepCount](hkquantitytypeidentifier/stepcount.md): A quantity sample type that measures the number of steps the user has taken.
- [HKQuantityTypeIdentifierDistanceWalkingRunning](hkquantitytypeidentifier/distancewalkingrunning.md): A quantity sample type that measures the distance the user has moved by walking or running.
- [HKQuantityTypeIdentifierRunningSpeed](hkquantitytypeidentifier/runningspeed.md): A quantity sample type that measures the runner’s speed.
- [HKQuantityTypeIdentifierRunningStrideLength](hkquantitytypeidentifier/runningstridelength.md): A quantity sample type that measures the distance covered by a single step while running.
- [HKQuantityTypeIdentifierRunningPower](hkquantitytypeidentifier/runningpower.md): A quantity sample type that measures the rate of work required for the runner to maintain their speed.
- [HKQuantityTypeIdentifierRunningGroundContactTime](hkquantitytypeidentifier/runninggroundcontacttime.md): A quantity sample type that measures the amount of time the runner’s foot is in contact with the ground while running.
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
- [HKCategoryTypeIdentifierAppleStandHour](hkcategorytypeidentifier/applestandhour.md): A category sample type that counts the number of hours in the day during which the user has stood and moved for at least one minute per hour.
- [HKQuantityTypeIdentifierAppleStandTime](hkquantitytypeidentifier/applestandtime.md): A quantity sample type that measures the amount of time the user has spent standing.
- [HKQuantityTypeIdentifierVO2Max](hkquantitytypeidentifier/vo2max.md): A quantity sample that measures the maximal oxygen consumption during exercise.
- [HKCategoryTypeIdentifierLowCardioFitnessEvent](hkcategorytypeidentifier/lowcardiofitnessevent.md): An event that indicates the user’s VO2 max values consistently fall below a particular aerobic fitness threshold.

### Attachments

- [HKAttachment](hkattachment.md): A file that is attached to a sample in the HealthKit store.
- [HKAttachmentStore](hkattachmentstore.md): The access point for attachments associated with samples in the HealthKit store.

### Body measurements

- [HKQuantityTypeIdentifierHeight](hkquantitytypeidentifier/height.md): A quantity sample type that measures the user’s height.
- [HKQuantityTypeIdentifierBodyMass](hkquantitytypeidentifier/bodymass.md): A quantity sample type that measures the user’s weight.
- [HKQuantityTypeIdentifierBodyMassIndex](hkquantitytypeidentifier/bodymassindex.md): A quantity sample type that measures the user’s body mass index.
- [HKQuantityTypeIdentifierLeanBodyMass](hkquantitytypeidentifier/leanbodymass.md): A quantity sample type that measures the user’s lean body mass.
- [HKQuantityTypeIdentifierBodyFatPercentage](hkquantitytypeidentifier/bodyfatpercentage.md): A quantity sample type that measures the user’s body fat percentage.
- [HKQuantityTypeIdentifierWaistCircumference](hkquantitytypeidentifier/waistcircumference.md): A quantity sample type that measures the user’s waist circumference.

### Reproductive health

- [HKCategoryTypeIdentifierMenstrualFlow](hkcategorytypeidentifier/menstrualflow.md): A category sample type that records menstrual cycles.
- [HKCategoryTypeIdentifierIntermenstrualBleeding](hkcategorytypeidentifier/intermenstrualbleeding.md): A category sample type that records spotting outside the normal menstruation period.
- [HKCategoryTypeIdentifierInfrequentMenstrualCycles](hkcategorytypeidentifier/infrequentmenstrualcycles.md): A category sample that indicates an infrequent menstrual cycle.
- [HKCategoryTypeIdentifierIrregularMenstrualCycles](hkcategorytypeidentifier/irregularmenstrualcycles.md): A category sample that indicates an irregular menstrual cycle.
- [HKCategoryTypeIdentifierPersistentIntermenstrualBleeding](hkcategorytypeidentifier/persistentintermenstrualbleeding.md): A category sample that indicates persistent intermenstrual bleeding.
- [HKCategoryTypeIdentifierProlongedMenstrualPeriods](hkcategorytypeidentifier/prolongedmenstrualperiods.md): A category sample that indicates a prolonged menstrual cycle.
- [HKQuantityTypeIdentifierBasalBodyTemperature](hkquantitytypeidentifier/basalbodytemperature.md): A quantity sample type that records the user’s basal body temperature.
- [HKCategoryTypeIdentifierCervicalMucusQuality](hkcategorytypeidentifier/cervicalmucusquality.md): A category sample type that records the quality of the user’s cervical mucus.
- [HKCategoryTypeIdentifierOvulationTestResult](hkcategorytypeidentifier/ovulationtestresult.md): A category sample type that records the result of an ovulation home test.
- [HKCategoryTypeIdentifierProgesteroneTestResult](hkcategorytypeidentifier/progesteronetestresult.md): A category type that represents the results from a home progesterone test.
- [HKCategoryTypeIdentifierSexualActivity](hkcategorytypeidentifier/sexualactivity.md): A category sample type that records sexual activity.
- [HKCategoryTypeIdentifierContraceptive](hkcategorytypeidentifier/contraceptive.md): A category sample type that records the use of contraceptives.
- [HKCategoryTypeIdentifierPregnancy](hkcategorytypeidentifier/pregnancy.md): A category type that records pregnancy.
- [HKCategoryTypeIdentifierPregnancyTestResult](hkcategorytypeidentifier/pregnancytestresult.md): A category type that represents the results from a home pregnancy test.
- [HKCategoryTypeIdentifierLactation](hkcategorytypeidentifier/lactation.md): A category type that records lactation.
- [HKCategoryValueVaginalBleeding](hkcategoryvaluevaginalbleeding.md): A value that indicates the intensity of vaginal bleeding.

### Menopause

- [Recording and querying menopausal state](recording-and-querying-menopausal-state.md): Personalize someone’s experience on a health app by tracking the information they record on menopausal state.
- [HKCategoryTypeIdentifierMenopausalState](hkcategorytypeidentifier/menopausalstate.md): An identifier for samples that record a person’s menopausal state.
- [HKCategoryTypeIdentifierBleedingAfterMenopause](hkcategorytypeidentifier/bleedingaftermenopause.md): An identifier for samples that record bleeding after menopause.
- [HKCategoryValueMenopausalState](hkcategoryvaluemenopausalstate.md): A value that indicates the menopausal state at a recorded point in time.

### Hearing

- [HKQuantityTypeIdentifierEnvironmentalAudioExposure](hkquantitytypeidentifier/environmentalaudioexposure.md): A quantity sample type that measures audio exposure to sounds in the environment.
- [HKQuantityTypeIdentifierHeadphoneAudioExposure](hkquantitytypeidentifier/headphoneaudioexposure.md): A quantity sample type that measures audio exposure from headphones.
- [HKCategoryTypeIdentifierEnvironmentalAudioExposureEvent](hkcategorytypeidentifier/environmentalaudioexposureevent.md): A category sample type that records exposure to potentially damaging sounds from the environment.
- [HKCategoryTypeIdentifierHeadphoneAudioExposureEvent](hkcategorytypeidentifier/headphoneaudioexposureevent.md): A category sample type that records exposure to potentially damaging sounds from headphones.
- [HKCategoryTypeIdentifierAudioExposureEvent](hkcategorytypeidentifier/audioexposureevent.md): Deprecated. A category sample type for audio exposure events.

### Vital signs

- [HKQuantityTypeIdentifierHeartRate](hkquantitytypeidentifier/heartrate.md): A quantity sample type that measures the user’s heart rate.
- [HKCategoryTypeIdentifierLowHeartRateEvent](hkcategorytypeidentifier/lowheartrateevent.md): A category sample type for low heart rate events.
- [HKCategoryTypeIdentifierHighHeartRateEvent](hkcategorytypeidentifier/highheartrateevent.md): A category sample type for high heart rate events.
- [HKCategoryTypeIdentifierIrregularHeartRhythmEvent](hkcategorytypeidentifier/irregularheartrhythmevent.md): A category sample type for irregular heart rhythm events.
- [HKQuantityTypeIdentifierRestingHeartRate](hkquantitytypeidentifier/restingheartrate.md): A quantity sample type that measures the user’s resting heart rate.
- [HKQuantityTypeIdentifierHeartRateVariabilitySDNN](hkquantitytypeidentifier/heartratevariabilitysdnn.md): A quantity sample type that measures the standard deviation of heartbeat intervals.
- [HKQuantityTypeIdentifierHeartRateRecoveryOneMinute](hkquantitytypeidentifier/heartraterecoveryoneminute.md): A quantity sample that records the reduction in heart rate from the peak exercise rate to the rate one minute after exercising ended.
- [HKQuantityTypeIdentifierAtrialFibrillationBurden](hkquantitytypeidentifier/atrialfibrillationburden.md): A quantity type that measures an estimate of the percentage of time a person’s heart shows signs of atrial fibrillation (AFib) while wearing Apple Watch.
- [HKQuantityTypeIdentifierWalkingHeartRateAverage](hkquantitytypeidentifier/walkingheartrateaverage.md): A quantity sample type that measures the user’s heart rate while walking.
- [HKDataTypeIdentifierHeartbeatSeries](hkdatatypeidentifierheartbeatseries.md): A series sample containing heartbeat data.
- [HKElectrocardiogramType](hkelectrocardiogramtype.md): A type that identifies samples containing electrocardiogram data.
- [HKQuantityTypeIdentifierOxygenSaturation](hkquantitytypeidentifier/oxygensaturation.md): A quantity sample type that measures the user’s oxygen saturation.
- [HKQuantityTypeIdentifierBodyTemperature](hkquantitytypeidentifier/bodytemperature.md): A quantity sample type that measures the user’s body temperature.
- [HKCorrelationTypeIdentifierBloodPressure](hkcorrelationtypeidentifier/bloodpressure.md): A correlation sample that combines a systolic sample and a diastolic sample into a single blood pressure reading.
- [HKQuantityTypeIdentifierBloodPressureSystolic](hkquantitytypeidentifier/bloodpressuresystolic.md): A quantity sample type that measures the user’s systolic blood pressure.
- [HKQuantityTypeIdentifierBloodPressureDiastolic](hkquantitytypeidentifier/bloodpressurediastolic.md): A quantity sample type that measures the user’s diastolic blood pressure.
- [HKQuantityTypeIdentifierRespiratoryRate](hkquantitytypeidentifier/respiratoryrate.md): A quantity sample type that measures the user’s respiratory rate.

### Nutrition

- [Nutrition Type Identifiers](nutrition-type-identifiers.md): Type identifiers used for tracking diet and nutrition.

### Alcohol consumption

- [HKQuantityTypeIdentifierBloodAlcoholContent](hkquantitytypeidentifier/bloodalcoholcontent.md): A quantity sample type that measures the user’s blood alcohol content.
- [HKQuantityTypeIdentifierNumberOfAlcoholicBeverages](hkquantitytypeidentifier/numberofalcoholicbeverages.md): A quantity sample type that measures the number of standard alcoholic drinks that the user has consumed.

### Mobility

- [HKQuantityTypeIdentifierAppleWalkingSteadiness](hkquantitytypeidentifier/applewalkingsteadiness.md): A quantity sample type that measures the steadiness of the user’s gait.
- [HKCategoryTypeIdentifierAppleWalkingSteadinessEvent](hkcategorytypeidentifier/applewalkingsteadinessevent.md): A category sample type that records an incident where the user showed a reduced score for their gait’s steadiness.
- [HKQuantityTypeIdentifierSixMinuteWalkTestDistance](hkquantitytypeidentifier/sixminutewalktestdistance.md): A quantity sample type that stores the distance a user can walk during a six-minute walk test.
- [HKQuantityTypeIdentifierWalkingSpeed](hkquantitytypeidentifier/walkingspeed.md): A quantity sample type that measures the user’s average speed when walking steadily over flat ground.
- [HKQuantityTypeIdentifierWalkingStepLength](hkquantitytypeidentifier/walkingsteplength.md): A quantity sample type that measures the average length of the user’s step when walking steadily over flat ground.
- [HKQuantityTypeIdentifierWalkingAsymmetryPercentage](hkquantitytypeidentifier/walkingasymmetrypercentage.md): A quantity sample type that measures the percentage of steps in which one foot moves at a different speed than the other when walking on flat ground.
- [HKQuantityTypeIdentifierWalkingDoubleSupportPercentage](hkquantitytypeidentifier/walkingdoublesupportpercentage.md): A quantity sample type that measures the percentage of time when both of the user’s feet touch the ground while walking steadily over flat ground.
- [HKQuantityTypeIdentifierStairAscentSpeed](hkquantitytypeidentifier/stairascentspeed.md): A quantity sample type measuring the user’s speed while climbing a flight of stairs.
- [HKQuantityTypeIdentifierStairDescentSpeed](hkquantitytypeidentifier/stairdescentspeed.md): A quantity sample type measuring the user’s speed while descending a flight of stairs.

### Symptoms

- [Symptom Type Identifiers](symptom-type-identifiers.md): Identifiers for medical symptoms.

### Lab and test results

- [HKQuantityTypeIdentifierBloodAlcoholContent](hkquantitytypeidentifier/bloodalcoholcontent.md): A quantity sample type that measures the user’s blood alcohol content.
- [HKQuantityTypeIdentifierBloodGlucose](hkquantitytypeidentifier/bloodglucose.md): A quantity sample type that measures the user’s blood glucose level.
- [HKQuantityTypeIdentifierElectrodermalActivity](hkquantitytypeidentifier/electrodermalactivity.md): A quantity sample type that measures electrodermal activity.
- [HKQuantityTypeIdentifierForcedExpiratoryVolume1](hkquantitytypeidentifier/forcedexpiratoryvolume1.md): A quantity sample type that measures the amount of air that can be forcibly exhaled from the lungs during the first second of a forced exhalation.
- [HKQuantityTypeIdentifierForcedVitalCapacity](hkquantitytypeidentifier/forcedvitalcapacity.md): A quantity sample type that measures the amount of air that can be forcibly exhaled from the lungs after taking the deepest breath possible.
- [HKQuantityTypeIdentifierInhalerUsage](hkquantitytypeidentifier/inhalerusage.md): A quantity sample type that measures the number of puffs the user takes from their inhaler.
- [HKQuantityTypeIdentifierInsulinDelivery](hkquantitytypeidentifier/insulindelivery.md): A quantity sample that measures the amount of insulin delivered.
- [HKQuantityTypeIdentifierNumberOfTimesFallen](hkquantitytypeidentifier/numberoftimesfallen.md): A quantity sample type that measures the number of times the user fell.
- [HKQuantityTypeIdentifierPeakExpiratoryFlowRate](hkquantitytypeidentifier/peakexpiratoryflowrate.md): A quantity sample type that measures the user’s maximum flow rate generated during a forceful exhalation.
- [HKQuantityTypeIdentifierPeripheralPerfusionIndex](hkquantitytypeidentifier/peripheralperfusionindex.md): A quantity sample type that measures the user’s peripheral perfusion index.

### Mindfulness and sleep

- [HKCategoryTypeIdentifierMindfulSession](hkcategorytypeidentifier/mindfulsession.md): A category sample type for recording a mindful session.
- [HKCategoryTypeIdentifierSleepAnalysis](hkcategorytypeidentifier/sleepanalysis.md): A category sample type for sleep analysis information.
- [HKCategoryValueSleepAnalysisAsleepValues](hkcategoryvaluesleepanalysisasleepvalues.md)
- [HKQuantityTypeIdentifierAppleSleepingWristTemperature](hkquantitytypeidentifier/applesleepingwristtemperature.md): A quantity sample type that records the wrist temperature during sleep.
- [HKAppleSleepingBreathingDisturbancesClassificationForQuantity](hkapplesleepingbreathingdisturbancesclassificationforquantity.md)
- [HKAppleSleepingBreathingDisturbancesClassification](hkapplesleepingbreathingdisturbancesclassification.md)

### Self care

- [HKCategoryTypeIdentifierToothbrushingEvent](hkcategorytypeidentifier/toothbrushingevent.md): A category sample type for toothbrushing events.
- [HKCategoryTypeIdentifierHandwashingEvent](hkcategorytypeidentifier/handwashingevent.md): A category sample type for handwashing events.

### Workouts

- [HKWorkoutTypeIdentifier](hkworkouttypeidentifier.md): The workout type identifier.
- [HKWorkoutRouteTypeIdentifier](hkworkoutroutetypeidentifier.md): A series sample containing location data that defines the route the user took during a workout.

### Clinical records

- [HKClinicalTypeIdentifier](hkclinicaltypeidentifier.md): A type identifier for the different categories of clinical records.

### UV exposure

- [HKQuantityTypeIdentifierUVExposure](hkquantitytypeidentifier/uvexposure.md): A quantity sample type that measures the user’s exposure to UV radiation.

### Vision

- [HKVisionPrescriptionTypeIdentifier](hkvisionprescriptiontypeidentifier.md): A type identifier for vision prescription samples.

### Diving

- [HKQuantityTypeIdentifierUnderwaterDepth](hkquantitytypeidentifier/underwaterdepth.md): A quantity sample that records a person’s depth underwater.
- [HKQuantityTypeIdentifierWaterTemperature](hkquantitytypeidentifier/watertemperature.md): A quantity sample that records the water temperature.

## See Also

### Health data

- [Saving data to HealthKit](saving-data-to-healthkit.md): Create and share HealthKit samples.
- [Reading data from HealthKit](reading-data-from-healthkit.md): Use queries to request sample data from HealthKit.
- [HKHealthStore](hkhealthstore.md): The access point for all data managed by HealthKit.
- [Samples](samples.md): Create and save health and fitness samples.
- [Queries](queries.md): Query health and fitness data.
- [Visualizing HealthKit State of Mind in visionOS](visualizing-healthkit-state-of-mind-in-visionos.md): Incorporate HealthKit State of Mind into your app and visualize the data in visionOS.
- [Logging symptoms associated with a medication](logging-symptoms-associated-with-a-medication.md): Fetch medications and dose events from the HealthKit store, and create symptom samples to associate with them.
