> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit](https://developer.apple.com/documentation/healthkit)

# HealthKit (Swift)

**Framework:** HealthKit  
**Kind:** Framework  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+ · watchOS 2.0+

Access and share health and fitness data while maintaining the user’s privacy and control.

<a id="overview"></a>

## Overview

HealthKit provides a central repository for health and fitness data on iPhone and Apple Watch. With the user’s permission, apps communicate with the HealthKit store to access and share this data.

![An image showing the Health app summary screen.](https://developer.apple.com/images/com.apple.healthkit/health-summary@2x.png)

Creating a complete, personalized health and fitness experience includes a variety of tasks:

- Collecting and storing health and fitness data
- Analyzing and visualizing the data
- Enabling social interactions

HealthKit apps take a collaborative approach to building this experience. Your app doesn’t need to provide all of these features. Instead, you can focus just on the subset of tasks that most interests you.

For example, users can select their favorite weight-tracking, step-counting, and health challenge app, each calibrated to their personal needs. Because HealthKit apps freely exchange data (with user permission), the combined suite provides a more customized experience than any single app on its own. For example, when a group of friends joins a daily step-counting challenge, each person can use their preferred hardware device and app to track their steps, while everyone in the group uses the same social app for the challenge.

HealthKit is also designed to manage and merge data from multiple sources. For example, users can view and manage all of their data in the Health App, including adding data, deleting data, and changing an app’s permissions. Therefore, your app needs to handle these changes, even when they occur outside your app.

> **Note**

>  Because health data may contain sensitive, personal information, apps must receive permission from the user to read data from or write data to the HealthKit store. They must also take steps to protect that data at all times. For more information, see [Protecting user privacy](healthkit/protecting-user-privacy.md).

## Topics

### Essentials

- [About the HealthKit framework](healthkit/about-the-healthkit-framework.md): Learn about the architecture and design of the HealthKit framework.
- [Setting up HealthKit](healthkit/setting-up-healthkit.md): Set up and configure your HealthKit store.
- [Authorizing access to health data](healthkit/authorizing-access-to-health-data.md): Request permission to read and share data in your app.
- [Protecting user privacy](healthkit/protecting-user-privacy.md): Respect and safeguard your user’s privacy.
- [HealthKit updates](https://developer.apple.com/documentation/updates/healthkit): Learn about important changes to HealthKit.
- [HealthKitUI](healthkitui.md): Display user interface that enables a person to view and interact with their health data.

### Health data

- [Saving data to HealthKit](healthkit/saving-data-to-healthkit.md): Create and share HealthKit samples.
- [Reading data from HealthKit](healthkit/reading-data-from-healthkit.md): Use queries to request sample data from HealthKit.
- [HKHealthStore](healthkit/hkhealthstore.md): The access point for all data managed by HealthKit.
- [Creating a Mobility Health App](healthkit/creating-a-mobility-health-app.md): Create a health app that allows a clinical care team to send and receive mobility data.
- [Data types](healthkit/data-types.md): Specify the kind of data used in HealthKit.
- [Samples](healthkit/samples.md): Create and save health and fitness samples.
- [Queries](healthkit/queries.md): Query health and fitness data.
- [Visualizing HealthKit State of Mind in visionOS](healthkit/visualizing-healthkit-state-of-mind-in-visionos.md): Incorporate HealthKit State of Mind into your app and visualize the data in visionOS.
- [Logging symptoms associated with a medication](healthkit/logging-symptoms-associated-with-a-medication.md): Fetch medications and dose events from the HealthKit store, and create symptom samples to associate with them.

### Workout data

- [Workouts and activity rings](healthkit/workouts-and-activity-rings.md): Manage workouts, workout sessions, and activity summaries.

### Errors

- [HKError](healthkit/hkerror.md): An error returned from a HealthKit method.
- [HKErrorDomain](healthkit/hkerrordomain.md): The domain for all HealthKit errors.
- [HKError.Code](healthkit/hkerror/code.md): Error codes returned by HealthKit.

### Reference

- [HealthKit Enumerations](healthkit/healthkit-enumerations.md)
- [HealthKit Classes](healthkit/healthkit-classes.md)
- [HealthKit Constants](healthkit/healthkit-constants.md)
- [HealthKit Data Types](healthkit/healthkit-data-types.md)
- [HealthKit Functions](healthkit/healthkit-functions.md)
- [Macros](healthkit/healthkit-macros.md)
- [HealthKit Variables](healthkit/healthkit-variables.md)

# HealthKit (Objective-C)

**Framework:** HealthKit  
**Kind:** Framework  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+ · watchOS 2.0+

Access and share health and fitness data while maintaining the user’s privacy and control.

<a id="overview"></a>

## Overview

HealthKit provides a central repository for health and fitness data on iPhone and Apple Watch. With the user’s permission, apps communicate with the HealthKit store to access and share this data.

![An image showing the Health app summary screen.](https://developer.apple.com/images/com.apple.healthkit/health-summary@2x.png)

Creating a complete, personalized health and fitness experience includes a variety of tasks:

- Collecting and storing health and fitness data
- Analyzing and visualizing the data
- Enabling social interactions

HealthKit apps take a collaborative approach to building this experience. Your app doesn’t need to provide all of these features. Instead, you can focus just on the subset of tasks that most interests you.

For example, users can select their favorite weight-tracking, step-counting, and health challenge app, each calibrated to their personal needs. Because HealthKit apps freely exchange data (with user permission), the combined suite provides a more customized experience than any single app on its own. For example, when a group of friends joins a daily step-counting challenge, each person can use their preferred hardware device and app to track their steps, while everyone in the group uses the same social app for the challenge.

HealthKit is also designed to manage and merge data from multiple sources. For example, users can view and manage all of their data in the Health App, including adding data, deleting data, and changing an app’s permissions. Therefore, your app needs to handle these changes, even when they occur outside your app.

> **Note**

>  Because health data may contain sensitive, personal information, apps must receive permission from the user to read data from or write data to the HealthKit store. They must also take steps to protect that data at all times. For more information, see [Protecting user privacy](healthkit/protecting-user-privacy.md).

## Topics

### Essentials

- [About the HealthKit framework](healthkit/about-the-healthkit-framework.md): Learn about the architecture and design of the HealthKit framework.
- [Setting up HealthKit](healthkit/setting-up-healthkit.md): Set up and configure your HealthKit store.
- [Authorizing access to health data](healthkit/authorizing-access-to-health-data.md): Request permission to read and share data in your app.
- [Protecting user privacy](healthkit/protecting-user-privacy.md): Respect and safeguard your user’s privacy.
- [HealthKit updates](https://developer.apple.com/documentation/updates/healthkit): Learn about important changes to HealthKit.
- [HealthKitUI](healthkitui.md): Display user interface that enables a person to view and interact with their health data.

### Health data

- [Saving data to HealthKit](healthkit/saving-data-to-healthkit.md): Create and share HealthKit samples.
- [Reading data from HealthKit](healthkit/reading-data-from-healthkit.md): Use queries to request sample data from HealthKit.
- [HKHealthStore](healthkit/hkhealthstore.md): The access point for all data managed by HealthKit.
- [Data types](healthkit/data-types.md): Specify the kind of data used in HealthKit.
- [Samples](healthkit/samples.md): Create and save health and fitness samples.
- [Queries](healthkit/queries.md): Query health and fitness data.
- [Visualizing HealthKit State of Mind in visionOS](healthkit/visualizing-healthkit-state-of-mind-in-visionos.md): Incorporate HealthKit State of Mind into your app and visualize the data in visionOS.
- [Logging symptoms associated with a medication](healthkit/logging-symptoms-associated-with-a-medication.md): Fetch medications and dose events from the HealthKit store, and create symptom samples to associate with them.

### Workout data

- [Workouts and activity rings](healthkit/workouts-and-activity-rings.md): Manage workouts, workout sessions, and activity summaries.

### Errors

- [HKErrorDomain](healthkit/hkerrordomain.md): The domain for all HealthKit errors.
- [HKErrorCode](healthkit/hkerror/code.md): Error codes returned by HealthKit.

### Reference

- [HealthKit Enumerations](healthkit/healthkit-enumerations.md)
- [HealthKit Classes](healthkit/healthkit-classes.md)
- [HealthKit Constants](healthkit/healthkit-constants.md)
- [HealthKit Data Types](healthkit/healthkit-data-types.md)
- [HealthKit Functions](healthkit/healthkit-functions.md)
- [Macros](healthkit/healthkit-macros.md)
- [HealthKit Variables](healthkit/healthkit-variables.md)

### Variables

- [HKHealthConceptDomainMedication](healthkit/hkhealthconceptdomain/medication.md): The domain that represents medication concepts.
- [HKMedicationGeneralFormCapsule](healthkit/hkmedicationgeneralform/capsule.md): The medication comes in capsule form, such as a hard-shell capsule or softgel.
- [HKMedicationGeneralFormCream](healthkit/hkmedicationgeneralform/cream.md): The medication is applied as a cream.
- [HKMedicationGeneralFormDevice](healthkit/hkmedicationgeneralform/device.md): The medication is administered through a device, such as an infusion pump for controlled fluid delivery.
- [HKMedicationGeneralFormDrops](healthkit/hkmedicationgeneralform/drops.md): The medication is taken as drops, for example eye drops or ear drops.
- [HKMedicationGeneralFormFoam](healthkit/hkmedicationgeneralform/foam.md): The medication is applied as a foam.
- [HKMedicationGeneralFormGel](healthkit/hkmedicationgeneralform/gel.md): The medication is applied as a gel.
- [HKMedicationGeneralFormInhaler](healthkit/hkmedicationgeneralform/inhaler.md): The medication is delivered through an inhaler.
- [HKMedicationGeneralFormInjection](healthkit/hkmedicationgeneralform/injection.md): The medication is given as an injection.
- [HKMedicationGeneralFormLiquid](healthkit/hkmedicationgeneralform/liquid.md): The medication is taken as a liquid, such as a syrup.
- [HKMedicationGeneralFormLotion](healthkit/hkmedicationgeneralform/lotion.md): The medication is applied as a lotion.
- [HKMedicationGeneralFormOintment](healthkit/hkmedicationgeneralform/ointment.md): The medication is applied as an ointment.
- [HKMedicationGeneralFormPatch](healthkit/hkmedicationgeneralform/patch.md): The medication is applied as a patch worn on the skin.
- [HKMedicationGeneralFormPowder](healthkit/hkmedicationgeneralform/powder.md): The medication is taken as a powder.
- [HKMedicationGeneralFormSpray](healthkit/hkmedicationgeneralform/spray.md): The medication is delivered as a spray, for example a nasal spray or throat spray.
- [HKMedicationGeneralFormSuppository](healthkit/hkmedicationgeneralform/suppository.md): The medication is delivered as a suppository.
- [HKMedicationGeneralFormTablet](healthkit/hkmedicationgeneralform/tablet.md): The medication comes in tablet form, such as a pill or caplet.
- [HKMedicationGeneralFormTopical](healthkit/hkmedicationgeneralform/topical.md): The medication is applied topically in a form that wasn’t specified.
- [HKMedicationGeneralFormUnknown](healthkit/hkmedicationgeneralform/unknown.md): The system doesn’t know the general form of the medication.
- [HKQuantityTypeIdentifierHeartRateVariabilityRMSSD](healthkit/hkquantitytypeidentifier/heartratevariabilityrmssd.md)

### Enumerations

- [HKMedicationDoseEventLogStatus](healthkit/hkmedicationdoseevent/logstatus-swift.enum.md): The statuses the system assigns to a logged medication dose event.
- [HKMedicationDoseEventScheduleType](healthkit/hkmedicationdoseevent/scheduletype-swift.enum.md): The kind of schedule the system associates with a logged medication dose event.
