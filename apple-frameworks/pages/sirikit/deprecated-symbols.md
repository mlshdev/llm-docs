> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/sirikit/deprecated-symbols](https://developer.apple.com/documentation/sirikit/deprecated-symbols)

# Deprecated Symbols

**Interface languages:** Swift, Objective-C

**Framework:** Intents  
**Kind:** API Collection

Review unsupported symbols and their replacements.

<a id="overview"></a>

## Overview

Many deprecated system intents have no replacement. You may continue to provide these features by defining custom intents. For more information about custom intents, see [Adding User Interactivity with Siri Shortcuts and the Shortcuts App](adding-user-interactivity-with-siri-shortcuts-and-the-shortcuts-app.md).

## Topics

### Audio Call Initiation

Initiate a new audio-only call, transferring control to your app for the call itself.

- [INStartAudioCallIntentHandling](../intents/instartaudiocallintenthandling.md): Deprecated. The handler interface for initiating an audio call from your app.
- [INStartAudioCallIntent](../intents/instartaudiocallintent.md): Deprecated. A request to start an audio-only call with one or more users.
- [INStartAudioCallIntentResponse](../intents/instartaudiocallintentresponse.md): Deprecated. An app’s response to an intent to start an audio call.

### Video Call Initiation

Initiate a new video call, transferring control to your app for the call itself.

- [INStartVideoCallIntentHandling](../intents/instartvideocallintenthandling.md): Deprecated. The handler interface for initiating a video call from your app.
- [INStartVideoCallIntent](../intents/instartvideocallintent.md): Deprecated. A request to start a video call with one or more users.
- [INStartVideoCallIntentResponse](../intents/instartvideocallintentresponse.md): Deprecated. A response to an intent to start a video call.

### Note Content

- [INNoteContentType](../intents/innotecontenttype.md): Deprecated. Constants indicating the type of content represented by the note.
- [INNoteContentTypeResolutionResult](../intents/innotecontenttyperesolutionresult.md): Deprecated. A resolution result for the type of data contained in notes.

### Domain-Handling Protocols

- [INMessagesDomainHandling](../intents/inmessagesdomainhandling.md): Deprecated. An interface for adopting all of the protocols in the messages domain.
- [INNotebookDomainHandling](../intents/innotebookdomainhandling.md): Deprecated. An interface for adopting all of the protocols in the lists and notes domain.
- [INWorkoutsDomainHandling](../intents/inworkoutsdomainhandling.md): Deprecated. An interface for adopting all of the protocols in the workouts domain.
- [INPaymentsDomainHandling](../intents/inpaymentsdomainhandling.md): Deprecated. An interface for adopting all of the protocols in the payments domain.
- [INCallsDomainHandling](../intents/incallsdomainhandling.md): Deprecated. Provides a convenient way to adopt all of the protocols in the VoIP calling domain.
- [INVisualCodeDomainHandling](../intents/invisualcodedomainhandling.md): Deprecated. An interface for adopting all of the protocols in the visual codes domain.
- [INPhotosDomainHandling](../intents/inphotosdomainhandling.md): Deprecated. An interface for adopting all of the protocols in the photos domain.
- [INRidesharingDomainHandling](../intents/inridesharingdomainhandling.md): Deprecated. An interface for adopting all of the protocols in the ride-booking domain.
- [INCarCommandsDomainHandling](../intents/incarcommandsdomainhandling.md): Deprecated. An interface for adopting all the handling protocols in the car commands domain.
- [INCarPlayDomainHandling](../intents/incarplaydomainhandling.md): Deprecated. An interface for adopting all of the protocols in the CarPlay domain.
- [INRadioDomainHandling](../intents/inradiodomainhandling.md): Deprecated. An interface for adopting all of the protocols in the radio domain.

### Bill Payment

- [INPayBillIntentHandling](../intents/inpaybillintenthandling.md): Deprecated. The handler interface for paying a bill using money from the user’s account.
- [INPayBillIntent](../intents/inpaybillintent.md): Deprecated. A request to transfer money to facilitate payment of a bill.
- [INPayBillIntentResponse](../intents/inpaybillintentresponse.md): Deprecated. Your app’s response to a request to pay a bill.

### Bill Search

- [INSearchForBillsIntentHandling](../intents/insearchforbillsintenthandling.md): Deprecated. The handler interface for searching for bills associated with the user.
- [INSearchForBillsIntent](../intents/insearchforbillsintent.md): Deprecated. A request for the list of bills matching the specified criteria.
- [INSearchForBillsIntentResponse](../intents/insearchforbillsintentresponse.md): Deprecated. Your app’s response to a request to a search for bills.

### Bill Data Objects

- [INBillDetails](../intents/inbilldetails.md): Deprecated. The detailed information associated with a bill.
- [INBillPayee](../intents/inbillpayee.md): Deprecated. The entity that receives the proceeds from a bill payment.
- [INBillTypeResolutionResult](../intents/inbilltyperesolutionresult.md): Deprecated. A resolution result for the types of bills a user might pay.
- [INBillPayeeResolutionResult](../intents/inbillpayeeresolutionresult.md): Deprecated. A resolution result for the recipient of a bill payment.
- [INVisualCodeTypeResolutionResult](../intents/invisualcodetyperesolutionresult.md): Deprecated. A resolution result for the type of visual code used to exchange information.

### Call History Search

- [INSearchCallHistoryIntentHandling](../intents/insearchcallhistoryintenthandling.md): Deprecated. The handler interface for searching the user’s call history.
- [INSearchCallHistoryIntent](../intents/insearchcallhistoryintent.md): Deprecated. A request to list the calls matching the specified criteria.
- [INSearchCallHistoryIntentResponse](../intents/insearchcallhistoryintentresponse.md): Deprecated. Your app’s response to a search call history intent.

### CarPlay Audio Source

- [INSetAudioSourceInCarIntentHandling](../intents/insetaudiosourceincarintenthandling.md): Deprecated. The handler interface for changing a vehicle’s audio source.
- [INSetAudioSourceInCarIntent](../intents/insetaudiosourceincarintent.md): Deprecated. A request to change the source of audio playback in a CarPlay-enabled vehicle.
- [INSetAudioSourceInCarIntentResponse](../intents/insetaudiosourceincarintentresponse.md): Deprecated. Your app’s response to a set audio source in car intent.

### CarPlay Climate Settings

- [INSetClimateSettingsInCarIntentHandling](../intents/insetclimatesettingsincarintenthandling.md): Deprecated. The handler interface for changing a vehicle’s climate control settings.
- [INSetClimateSettingsInCarIntent](../intents/insetclimatesettingsincarintent.md): Deprecated. A request to change the climate settings in a CarPlay-enabled vehicle.
- [INSetClimateSettingsInCarIntentResponse](../intents/insetclimatesettingsincarintentresponse.md): Deprecated. Your app’s response to a set climate settings in car intent.

### CarPlay Defroster Settings

- [INSetDefrosterSettingsInCarIntentHandling](../intents/insetdefrostersettingsincarintenthandling.md): Deprecated. The handler interface for changing a vehicle’s defroster settings.
- [INSetDefrosterSettingsInCarIntent](../intents/insetdefrostersettingsincarintent.md): Deprecated. A request to change the defroster settings in a CarPlay-enabled vehicle.
- [INSetDefrosterSettingsInCarIntentResponse](../intents/insetdefrostersettingsincarintentresponse.md): Deprecated. Your app’s response to a set defroster settings in car intent.

### CarPlay Profile Saving

- [INSaveProfileInCarIntentHandling](../intents/insaveprofileincarintenthandling.md): Deprecated. The handler interface for saving vehicle environment settings to a user-specified profile.
- [INSaveProfileInCarIntent](../intents/insaveprofileincarintent.md): Deprecated. A request to save the user’s vehicle environment settings in a CarPlay-enabled vehicle.
- [INSaveProfileInCarIntentResponse](../intents/insaveprofileincarintentresponse.md): Deprecated. Your app’s response to a save profile in car intent.

### CarPlay Profile Settings

- [INSetProfileInCarIntentHandling](../intents/insetprofileincarintenthandling.md): Deprecated. The handler interface for restoring vehicle environment settings from a user-specified profile.
- [INSetProfileInCarIntent](../intents/insetprofileincarintent.md): Deprecated. A request to change the user’s vehicle environment settings to the ones from the specified profile.
- [INSetProfileInCarIntentResponse](../intents/insetprofileincarintentresponse.md): Deprecated. Your app’s response to a set profile in car intent.

### CarPlay Radio Station Settings

- [INSetRadioStationIntentHandling](../intents/insetradiostationintenthandling.md): Deprecated. The handler interface for changing a radio station.
- [INSetRadioStationIntent](../intents/insetradiostationintent.md): Deprecated. A request to change the current radio station.
- [INSetRadioStationIntentResponse](../intents/insetradiostationintentresponse.md): Deprecated. Your app’s response to a set radio station intent.

### CarPlay Seat Settings

- [INSetSeatSettingsInCarIntentHandling](../intents/insetseatsettingsincarintenthandling.md): Deprecated. The handler interface for changing a vehicle’s seat-related settings.
- [INSetSeatSettingsInCarIntent](../intents/insetseatsettingsincarintent.md): Deprecated. A request to change the seat-related settings in a CarPlay-enabled vehicle.
- [INSetSeatSettingsInCarIntentResponse](../intents/insetseatsettingsincarintentresponse.md): Deprecated. Your app’s response to a set seat settings in car intent.

### CarPlay Data Objects

- [INCarSeat](../intents/incarseat.md): Deprecated. Constants indicating a seat position.
- [INCarDefroster](../intents/incardefroster.md): Deprecated. Constants indicating the defroster type.
- [INCarAudioSource](../intents/incaraudiosource.md): Deprecated. Constants indicating the source of audio.
- [INCarAirCirculationMode](../intents/incaraircirculationmode.md): Deprecated. Constants indicating the circulation mode for the climate system.
- [INRadioType](../intents/inradiotype.md): Deprecated. Constants indicating the type of radio.
- [INRelativeReference](../intents/inrelativereference.md): Deprecated. Constants indicating relative positions.
- [INRelativeSetting](../intents/inrelativesetting.md): Deprecated. Constants indicating relative settings.

### CarPlay Resolution Results

- [INCarSeatResolutionResult](../intents/incarseatresolutionresult.md): Deprecated. A resolution result for a specific seat of the car.
- [INCarDefrosterResolutionResult](../intents/incardefrosterresolutionresult.md): Deprecated. A resolution result for which defroster to use in a car.
- [INCarAudioSourceResolutionResult](../intents/incaraudiosourceresolutionresult.md): Deprecated. A resolution result for the audio source to use in a car.
- [INCarAirCirculationModeResolutionResult](../intents/incaraircirculationmoderesolutionresult.md): Deprecated. A resolution result for the air circulation mode to use in a car.
- [INRadioTypeResolutionResult](../intents/inradiotyperesolutionresult.md): Deprecated. A resolution result for the type of radio to use in a car.
- [INRelativeReferenceResolutionResult](../intents/inrelativereferenceresolutionresult.md): Deprecated. A resolution result for a choice between the next or previous option.
- [INRelativeSettingResolutionResult](../intents/inrelativesettingresolutionresult.md): Deprecated. A resolution result for whether you can select the minimum, current, or maximum value.

### Money Transfers

- [INTransferMoneyIntentHandling](../intents/intransfermoneyintenthandling.md): Deprecated. The handler interface for transferring money between accounts.
- [INTransferMoneyIntent](../intents/intransfermoneyintent.md): Deprecated. A request to transfer money between two accounts.
- [INTransferMoneyIntentResponse](../intents/intransfermoneyintentresponse.md): Deprecated. Your app’s response to a request to transfer money.

### Note Additions

- [INAppendToNoteIntentHandling](../intents/inappendtonoteintenthandling.md): Deprecated. The handler interface for appending content to a note.
- [INAppendToNoteIntent](../intents/inappendtonoteintent.md): Deprecated. A request to append content to a note.
- [INAppendToNoteIntentResponse](../intents/inappendtonoteintentresponse.md): Deprecated. Your app’s response to a request to append content to a note.

### Photo Search

- [INSearchForPhotosIntentHandling](../intents/insearchforphotosintenthandling.md): Deprecated. The handler interface for searching the user’s photos.
- [INSearchForPhotosIntent](../intents/insearchforphotosintent.md): Deprecated. A request for the list of photos that match the specified criteria.
- [INSearchForPhotosIntentResponse](../intents/insearchforphotosintentresponse.md): Deprecated. Your app’s response to a search for photos intent.

### Photo Playback

- [INStartPhotoPlaybackIntentHandling](../intents/instartphotoplaybackintenthandling.md): Deprecated. The handler interface for searching the user’s photos and the playback of the results.
- [INStartPhotoPlaybackIntent](../intents/instartphotoplaybackintent.md): Deprecated. A request to search for photos and initiate a slideshow with the results.
- [INStartPhotoPlaybackIntentResponse](../intents/instartphotoplaybackintentresponse.md): Deprecated. Your app’s response to a start photo playback intent.

### Photo Data Objects

- [INPhotoAttributeOptions](../intents/inphotoattributeoptions.md): Deprecated. Constants indicating attributes of a photo.

### Task Deletion

- [INDeleteTasksIntentHandling](../intents/indeletetasksintenthandling.md): Deprecated. An interface that handles requests to delete tasks from a task list.
- [INDeleteTasksIntent](../intents/indeletetasksintent.md): Deprecated. A request to delete one or more tasks.
- [INDeleteTasksIntentResponse](../intents/indeletetasksintentresponse.md): Deprecated. Your response to a request to delete tasks.
- [INDeleteTasksTaskListResolutionResult](../intents/indeletetaskstasklistresolutionresult.md): Deprecated. A resolution result for deleting task lists.
- [INDeleteTasksTaskResolutionResult](../intents/indeletetaskstaskresolutionresult.md): Deprecated. A resolution result for deleting tasks.

### Task List Creation

- [INCreateTaskListIntentHandling](../intents/increatetasklistintenthandling.md): Deprecated. The handler interface for creating task lists.
- [INCreateTaskListIntent](../intents/increatetasklistintent.md): Deprecated. A request to create a new task list.
- [INCreateTaskListIntentResponse](../intents/increatetasklistintentresponse.md): Deprecated. Your app’s response to a request to create a task list.

### Visual Codes

- [INGetVisualCodeIntentHandling](../intents/ingetvisualcodeintenthandling.md): Deprecated. The handler interface for displaying your app’s visual codes.
- [INGetVisualCodeIntent](../intents/ingetvisualcodeintent.md): Deprecated. A request for a visual code to use for exchanging payment and contact information.
- [INGetVisualCodeIntentResponse](../intents/ingetvisualcodeintentresponse.md): Deprecated. Your app’s response to a request for a visual code.
