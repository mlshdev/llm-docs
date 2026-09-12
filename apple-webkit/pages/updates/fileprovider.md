> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/updates/fileprovider](https://developer.apple.com/documentation/updates/fileprovider)

# File Provider updates

**Framework:** Updates  
**Kind:** Article

Learn about important changes to File Provider.

<a id="Overview"></a>

## Overview

Browse notable changes in [File Provider](https://developer.apple.com/documentation/fileprovider).

<a id="June-2024"></a>

## June 2024

- Offer people the ability to sync their Desktop and Documents folders with your File Provider app. Check whether a person opts in to sync these folders using [replicatedKnownFolders](https://developer.apple.com/documentation/fileprovider/nsfileproviderdomain/replicatedknownfolders). Sync the folders using [claimKnownFolders(\_:localizedReason:completionHandler:)](https://developer.apple.com/documentation/fileprovider/nsfileprovidermanager/claimknownfolders%28_:localizedreason:completionhandler:%29), or stop syncing using [releaseKnownFolders(\_:localizedReason:completionHandler:)](https://developer.apple.com/documentation/fileprovider/nsfileprovidermanager/releaseknownfolders%28_:localizedreason:completionhandler:%29) if the person opts out. Provide the system with information about which folders you support syncing through [supportedKnownFolders](https://developer.apple.com/documentation/fileprovider/nsfileproviderdomain/supportedknownfolders), and share the locations of the folders by adopting [NSFileProviderKnownFolderSupporting](https://developer.apple.com/documentation/fileprovider/nsfileproviderknownfoldersupporting).
- Cache files on external disks. Confirm whether a volume is eligible for storing a domain using [checkDomainsCanBeStoredOnVolume(at:)](https://developer.apple.com/documentation/fileprovider/nsfileprovidermanager/checkdomainscanbestoredonvolume%28at:%29), and create a domain on that volume using the new [init(displayName:userInfo:volumeURL:)](https://developer.apple.com/documentation/fileprovider/nsfileproviderdomain/init%28displayname:userinfo:volumeurl:%29) initializer. Store data about the current sync state using [stateDirectoryURL()](https://developer.apple.com/documentation/fileprovider/nsfileprovidermanager/statedirectoryurl%28%29), and determine whether to connect to a domain created on another device using [shouldConnectExternalDomain(completionHandler:)](https://developer.apple.com/documentation/fileprovider/nsfileproviderexternalvolumehandling/shouldconnectexternaldomain%28completionhandler:%29).
- Install the File Provider logging profile to log helpful information for debugging and troubleshooting. Download the `.mobileconfig` file at [Profiles and Logs](https://developer.apple.com/bug-reporting/profiles-and-logs/).

<a id="March-2024"></a>

## March 2024

- Improve error handling with new underlying error codes for [NSFileProviderError.Code.providerNotFound](https://developer.apple.com/documentation/fileprovider/nsfileprovidererror/code/providernotfound). [NSFileProviderError.Code.providerDomainTemporarilyUnavailable](https://developer.apple.com/documentation/fileprovider/nsfileprovidererror/code/providerdomaintemporarilyunavailable) indicates that the system is unable to service requests for this domain temporarily, and you can try again later. [NSFileProviderError.Code.providerDomainNotFound](https://developer.apple.com/documentation/fileprovider/nsfileprovidererror/code/providerdomainnotfound) indicates that there isn’t a registered domain for the corresponding identifier. [NSFileProviderError.Code.applicationExtensionNotFound](https://developer.apple.com/documentation/fileprovider/nsfileprovidererror/code/applicationextensionnotfound) indicates that there isn’t an app extension within the app bundle.

## See Also

### Technology and frameworks

- [Accelerate updates](accelerate.md): Learn about important changes to Accelerate.
- [Accessibility updates](accessibility.md): Learn about important changes to Accessibility.
- [ActivityKit updates](activitykit.md): Learn about important changes in ActivityKit.
- [AdAttributionKit Updates](adattributionkit.md): Learn about important changes to AdAttributionKit.
- [App Clips updates](appclips.md): Learn about important changes in App Clips.
- [App Intents updates](appintents.md): Learn about important changes in App Intents.
- [AppKit updates](appkit.md): Learn about important changes to AppKit.
- [Apple Intelligence updates](apple-intelligence.md): Learn about important changes to Apple Intelligence.
- [AppleMapsServerAPI Updates](applemapsserverapi.md): Learn about important changes to AppleMapsServerAPI.
- [Apple Pencil updates](applepencil.md): Learn about important changes to Apple Pencil.
- [ARKit updates](arkit.md): Learn about important changes to ARKit.
- [Audio Toolbox updates](audiotoolbox.md): Learn about important changes to Audio Toolbox.
- [AuthenticationServices updates](authenticationservices.md): Learn about important changes to AuthenticationServices.
- [AVFAudio updates](avfaudio.md): Learn about important changes to AVFAudio.
- [AVFoundation updates](avfoundation.md): Learn about important changes to AVFoundation.
