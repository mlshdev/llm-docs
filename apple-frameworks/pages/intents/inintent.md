> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inintent](https://developer.apple.com/documentation/intents/inintent)

# INIntent (Swift)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 3.2+

A request to fulfill in your app or Intents extension.

## Declaration

```swift
class INIntent
```

## Mentioned In

- [Adding User Interactivity with Siri Shortcuts and the Shortcuts App](../sirikit/adding-user-interactivity-with-siri-shortcuts-and-the-shortcuts-app.md)
- [Defining Relevant Shortcuts for the Siri Watch Face](../sirikit/defining-relevant-shortcuts-for-the-siri-watch-face.md)
- [Displaying Shortcut Information in a Siri Watch Face Card](../sirikit/displaying-shortcut-information-in-a-siri-watch-face-card.md)
- [Offering Actions in the Shortcuts App](../sirikit/offering-actions-in-the-shortcuts-app.md)

<a id="overview"></a>

## Overview

The [INIntent](inintent.md) class is abstract and provides behaviors shared by all intent objects. You don’t create instances of this class directly or implement your own custom subclasses. For a list of intent types that SiriKit already handles, see the Standard Intents section of [Intents](../intents.md). You may also define custom intent types in an Intent Definition file.

Each subclass of `INIntent` defines the properties needed to perform the corresponding action. You use instances of those classes when responding to a request sent to your app or Intents extension by SiriKit. For more information about a specific type of action, see the appropriate subclass.

## Topics

### Accessing Intent Information

- [identifier](inintent/identifier.md): The unique identifier for this intent object.
- [intentDescription](inintent/intentdescription.md): A string describing the content of the intent.
- [suggestedInvocationPhrase](inintent/suggestedinvocationphrase.md): The intent’s display name.
- [shortcutAvailability](inintent/shortcutavailability.md): A set of defined contexts in which an intent or activity might be relevant to a user.

### Associating an Image

- [keyImage()](inintent/keyimage%28%29.md): The most relevant image to display to the user.

### Initializers

- [init(coder:)](inintent/init%28coder_%29.md)

### Instance Properties

- [donationMetadata](inintent/donationmetadata.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [INActivateCarSignalIntent](inactivatecarsignalintent.md)
- [INAddMediaIntent](inaddmediaintent.md)
- [INAddTasksIntent](inaddtasksintent.md)
- [INAnswerCallIntent](inanswercallintent.md)
- [INAppendToNoteIntent](inappendtonoteintent.md)
- [INBookRestaurantReservationIntent](inbookrestaurantreservationintent.md)
- [INCancelRideIntent](incancelrideintent.md)
- [INCancelWorkoutIntent](incancelworkoutintent.md)
- [INCreateNoteIntent](increatenoteintent.md)
- [INCreateTaskListIntent](increatetasklistintent.md)
- [INDeleteTasksIntent](indeletetasksintent.md)
- [INEditMessageIntent](ineditmessageintent.md)
- [INEndWorkoutIntent](inendworkoutintent.md)
- [INGetAvailableRestaurantReservationBookingDefaultsIntent](ingetavailablerestaurantreservationbookingdefaultsintent.md)
- [INGetAvailableRestaurantReservationBookingsIntent](ingetavailablerestaurantreservationbookingsintent.md)
- [INGetCarLockStatusIntent](ingetcarlockstatusintent.md)
- [INGetCarPowerLevelStatusIntent](ingetcarpowerlevelstatusintent.md)
- [INGetReservationDetailsIntent](ingetreservationdetailsintent.md)
- [INGetRestaurantGuestIntent](ingetrestaurantguestintent.md)
- [INGetRideStatusIntent](ingetridestatusintent.md)
- [INGetUserCurrentRestaurantReservationBookingsIntent](ingetusercurrentrestaurantreservationbookingsintent.md)
- [INGetVisualCodeIntent](ingetvisualcodeintent.md)
- [INHangUpCallIntent](inhangupcallintent.md)
- [INListCarsIntent](inlistcarsintent.md)
- [INListRideOptionsIntent](inlistrideoptionsintent.md)
- [INPauseWorkoutIntent](inpauseworkoutintent.md)
- [INPayBillIntent](inpaybillintent.md)
- [INPlayMediaIntent](inplaymediaintent.md)
- [INRequestPaymentIntent](inrequestpaymentintent.md)
- [INRequestRideIntent](inrequestrideintent.md)
- [INResumeWorkoutIntent](inresumeworkoutintent.md)
- [INSaveProfileInCarIntent](insaveprofileincarintent.md)
- [INSearchCallHistoryIntent](insearchcallhistoryintent.md)
- [INSearchForAccountsIntent](insearchforaccountsintent.md)
- [INSearchForBillsIntent](insearchforbillsintent.md)
- [INSearchForMediaIntent](insearchformediaintent.md)
- [INSearchForMessagesIntent](insearchformessagesintent.md)
- [INSearchForNotebookItemsIntent](insearchfornotebookitemsintent.md)
- [INSearchForPhotosIntent](insearchforphotosintent.md)
- [INSendMessageIntent](insendmessageintent.md)
- [INSendPaymentIntent](insendpaymentintent.md)
- [INSendRideFeedbackIntent](insendridefeedbackintent.md)
- [INSetAudioSourceInCarIntent](insetaudiosourceincarintent.md)
- [INSetCarLockStatusIntent](insetcarlockstatusintent.md)
- [INSetClimateSettingsInCarIntent](insetclimatesettingsincarintent.md)
- [INSetDefrosterSettingsInCarIntent](insetdefrostersettingsincarintent.md)
- [INSetMessageAttributeIntent](insetmessageattributeintent.md)
- [INSetProfileInCarIntent](insetprofileincarintent.md)
- [INSetRadioStationIntent](insetradiostationintent.md)
- [INSetSeatSettingsInCarIntent](insetseatsettingsincarintent.md)
- [INSetTaskAttributeIntent](insettaskattributeintent.md)
- [INShareFocusStatusIntent](insharefocusstatusintent.md)
- [INSnoozeTasksIntent](insnoozetasksintent.md)
- [INStartAudioCallIntent](instartaudiocallintent.md)
- [INStartCallIntent](instartcallintent.md)
- [INStartPhotoPlaybackIntent](instartphotoplaybackintent.md)
- [INStartVideoCallIntent](instartvideocallintent.md)
- [INStartWorkoutIntent](instartworkoutintent.md)
- [INTransferMoneyIntent](intransfermoneyintent.md)
- [INUnsendMessagesIntent](inunsendmessagesintent.md)
- [INUpdateMediaAffinityIntent](inupdatemediaaffinityintent.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [INIntentSetImageKeyPath](inintentsetimagekeypath.md)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Intents

- [Dispatching intents to handlers](../sirikit/dispatching-intents-to-handlers.md): Provide SiriKit with an intent handler capable of handling a specific intent.
- [Resolving and Handling Intents](../sirikit/resolving-and-handling-intents.md): Resolve, confirm, and handle user requests for your app’s services.
- [INIntentResponse](inintentresponse.md): Your response to an intent object.
- [Intent Handling Infrastructure](../sirikit/intent-handling-infrastructure.md): Specify required permissions and provide handlers for the intents your app supports, and configure app extensions.
- [Providing Hands-Free App Control with Intents](../sirikit/providing-hands-free-app-control-with-intents.md): Resolve, confirm, and handle intents without an extension.
- [Resolution Results](../sirikit/resolution-results.md): Resolve common types of data like strings and dates into specific values that your app recognizes.
- [Common Data Types](../sirikit/common-data-types.md): Manage common data types such as strings, dates, currencies, images, and contacts.

# INIntent (Objective-C)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 3.2+

A request to fulfill in your app or Intents extension.

## Declaration

```objectivec
@interface INIntent : NSObject
```

## Mentioned In

- [Adding User Interactivity with Siri Shortcuts and the Shortcuts App](../sirikit/adding-user-interactivity-with-siri-shortcuts-and-the-shortcuts-app.md)
- [Defining Relevant Shortcuts for the Siri Watch Face](../sirikit/defining-relevant-shortcuts-for-the-siri-watch-face.md)
- [Displaying Shortcut Information in a Siri Watch Face Card](../sirikit/displaying-shortcut-information-in-a-siri-watch-face-card.md)
- [Offering Actions in the Shortcuts App](../sirikit/offering-actions-in-the-shortcuts-app.md)

<a id="overview"></a>

## Overview

The [INIntent](inintent.md) class is abstract and provides behaviors shared by all intent objects. You don’t create instances of this class directly or implement your own custom subclasses. For a list of intent types that SiriKit already handles, see the Standard Intents section of [Intents](../intents.md). You may also define custom intent types in an Intent Definition file.

Each subclass of `INIntent` defines the properties needed to perform the corresponding action. You use instances of those classes when responding to a request sent to your app or Intents extension by SiriKit. For more information about a specific type of action, see the appropriate subclass.

## Topics

### Accessing Intent Information

- [identifier](inintent/identifier.md): The unique identifier for this intent object.
- [intentDescription](inintent/intentdescription.md): A string describing the content of the intent.
- [suggestedInvocationPhrase](inintent/suggestedinvocationphrase.md): The intent’s display name.
- [shortcutAvailability](inintent/shortcutavailability.md): A set of defined contexts in which an intent or activity might be relevant to a user.

### Associating an Image

- [imageForParameterNamed:](https://developer.apple.com/documentation/intents/inintent/imageforparameternamed:): Returns the image associated with the specified parameter.
- [setImage:forParameterNamed:](https://developer.apple.com/documentation/intents/inintent/setimage:forparameternamed:): Sets the image to use for the specified parameter.
- [keyImage](inintent/keyimage%28%29.md): The most relevant image to display to the user.

### Instance Properties

- [donationMetadata](inintent/donationmetadata.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [INActivateCarSignalIntent](inactivatecarsignalintent.md)
- [INAddMediaIntent](inaddmediaintent.md)
- [INAddTasksIntent](inaddtasksintent.md)
- [INAnswerCallIntent](inanswercallintent.md)
- [INAppendToNoteIntent](inappendtonoteintent.md)
- [INBookRestaurantReservationIntent](inbookrestaurantreservationintent.md)
- [INCancelRideIntent](incancelrideintent.md)
- [INCancelWorkoutIntent](incancelworkoutintent.md)
- [INCreateNoteIntent](increatenoteintent.md)
- [INCreateTaskListIntent](increatetasklistintent.md)
- [INDeleteTasksIntent](indeletetasksintent.md)
- [INEditMessageIntent](ineditmessageintent.md)
- [INEndWorkoutIntent](inendworkoutintent.md)
- [INGetAvailableRestaurantReservationBookingDefaultsIntent](ingetavailablerestaurantreservationbookingdefaultsintent.md)
- [INGetAvailableRestaurantReservationBookingsIntent](ingetavailablerestaurantreservationbookingsintent.md)
- [INGetCarLockStatusIntent](ingetcarlockstatusintent.md)
- [INGetCarPowerLevelStatusIntent](ingetcarpowerlevelstatusintent.md)
- [INGetReservationDetailsIntent](ingetreservationdetailsintent.md)
- [INGetRestaurantGuestIntent](ingetrestaurantguestintent.md)
- [INGetRideStatusIntent](ingetridestatusintent.md)
- [INGetUserCurrentRestaurantReservationBookingsIntent](ingetusercurrentrestaurantreservationbookingsintent.md)
- [INGetVisualCodeIntent](ingetvisualcodeintent.md)
- [INHangUpCallIntent](inhangupcallintent.md)
- [INListCarsIntent](inlistcarsintent.md)
- [INListRideOptionsIntent](inlistrideoptionsintent.md)
- [INPauseWorkoutIntent](inpauseworkoutintent.md)
- [INPayBillIntent](inpaybillintent.md)
- [INPlayMediaIntent](inplaymediaintent.md)
- [INRequestPaymentIntent](inrequestpaymentintent.md)
- [INRequestRideIntent](inrequestrideintent.md)
- [INResumeWorkoutIntent](inresumeworkoutintent.md)
- [INSaveProfileInCarIntent](insaveprofileincarintent.md)
- [INSearchCallHistoryIntent](insearchcallhistoryintent.md)
- [INSearchForAccountsIntent](insearchforaccountsintent.md)
- [INSearchForBillsIntent](insearchforbillsintent.md)
- [INSearchForMediaIntent](insearchformediaintent.md)
- [INSearchForMessagesIntent](insearchformessagesintent.md)
- [INSearchForNotebookItemsIntent](insearchfornotebookitemsintent.md)
- [INSearchForPhotosIntent](insearchforphotosintent.md)
- [INSendMessageIntent](insendmessageintent.md)
- [INSendPaymentIntent](insendpaymentintent.md)
- [INSendRideFeedbackIntent](insendridefeedbackintent.md)
- [INSetAudioSourceInCarIntent](insetaudiosourceincarintent.md)
- [INSetCarLockStatusIntent](insetcarlockstatusintent.md)
- [INSetClimateSettingsInCarIntent](insetclimatesettingsincarintent.md)
- [INSetDefrosterSettingsInCarIntent](insetdefrostersettingsincarintent.md)
- [INSetMessageAttributeIntent](insetmessageattributeintent.md)
- [INSetProfileInCarIntent](insetprofileincarintent.md)
- [INSetRadioStationIntent](insetradiostationintent.md)
- [INSetSeatSettingsInCarIntent](insetseatsettingsincarintent.md)
- [INSetTaskAttributeIntent](insettaskattributeintent.md)
- [INShareFocusStatusIntent](insharefocusstatusintent.md)
- [INSnoozeTasksIntent](insnoozetasksintent.md)
- [INStartAudioCallIntent](instartaudiocallintent.md)
- [INStartCallIntent](instartcallintent.md)
- [INStartPhotoPlaybackIntent](instartphotoplaybackintent.md)
- [INStartVideoCallIntent](instartvideocallintent.md)
- [INStartWorkoutIntent](instartworkoutintent.md)
- [INTransferMoneyIntent](intransfermoneyintent.md)
- [INUnsendMessagesIntent](inunsendmessagesintent.md)
- [INUpdateMediaAffinityIntent](inupdatemediaaffinityintent.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Intents

- [Dispatching intents to handlers](../sirikit/dispatching-intents-to-handlers.md): Provide SiriKit with an intent handler capable of handling a specific intent.
- [Resolving and Handling Intents](../sirikit/resolving-and-handling-intents.md): Resolve, confirm, and handle user requests for your app’s services.
- [INIntentResponse](inintentresponse.md): Your response to an intent object.
- [Intent Handling Infrastructure](../sirikit/intent-handling-infrastructure.md): Specify required permissions and provide handlers for the intents your app supports, and configure app extensions.
- [Providing Hands-Free App Control with Intents](../sirikit/providing-hands-free-app-control-with-intents.md): Resolve, confirm, and handle intents without an extension.
- [Resolution Results](../sirikit/resolution-results.md): Resolve common types of data like strings and dates into specific values that your app recognizes.
- [Common Data Types](../sirikit/common-data-types.md): Manage common data types such as strings, dates, currencies, images, and contacts.
