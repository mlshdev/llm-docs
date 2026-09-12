> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/bundleresources/information-property-list/inintentssupported](https://developer.apple.com/documentation/bundleresources/information-property-list/inintentssupported)

# INIntentsSupported (Swift)

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · tvOS 14.0+ · visionOS 1.0+

The names of the intent classes your app handles directly.

## Details

`INIntentsSupported`

<a id="Discussion"></a>

## Discussion

Provide the class name of each [INIntent](../../intents/inintent.md) subclass your app can handle. To specify this information in Xcode, add the class names in the Supported Intents section of your app target in the Project Editor.

For more information on handling intents in your app, see [application(\_:handlerFor:)](../../uikit/uiapplicationdelegate/application%28__handlerfor_%29.md).

> **Tip**

>  You can start handling an intent in your app even if you want to support the intent in iOS 13. List the intent in the Supported Intents sections for both the app target and the extension target. For an app running on iOS 13, the system routes the intent with [handler(for:)](../../intents/inintenthandlerproviding/handler%28for_%29.md), and for later iOS versions, it routes the intent with [application(\_:handlerFor:)](../../uikit/uiapplicationdelegate/application%28__handlerfor_%29.md).

## See Also

### Intents

- [INIntentsRestrictedWhileLocked](inintentsrestrictedwhilelocked.md): The names of the intent classes your app can’t handle when the user locks the device.
- [INIntentsRestrictedWhileProtectedDataUnavailable](inintentsrestrictedwhileprotecteddataunavailable.md): The names of the intent classes your app can’t handle when the user locks the device or the system blocks access to protected data.
- [INSupportedMediaCategories](insupportedmediacategories.md): Types of media supported by your app’s media-playing intents.
- [NSFocusStatusUsageDescription](nsfocusstatususagedescription.md): A message that tells people why your app requests access to a person’s focus status.

# INIntentsSupported (Objective-C)

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · tvOS 14.0+ · visionOS 1.0+

The names of the intent classes your app handles directly.

## Details

`INIntentsSupported`

<a id="Discussion"></a>

## Discussion

Provide the class name of each [INIntent](../../intents/inintent.md) subclass your app can handle. To specify this information in Xcode, add the class names in the Supported Intents section of your app target in the Project Editor.

For more information on handling intents in your app, see [application:handlerForIntent:](../../uikit/uiapplicationdelegate/application%28__handlerfor_%29.md).

> **Tip**

>  You can start handling an intent in your app even if you want to support the intent in iOS 13. List the intent in the Supported Intents sections for both the app target and the extension target. For an app running on iOS 13, the system routes the intent with [handlerForIntent:](../../intents/inintenthandlerproviding/handler%28for_%29.md), and for later iOS versions, it routes the intent with [application:handlerForIntent:](../../uikit/uiapplicationdelegate/application%28__handlerfor_%29.md).

## See Also

### Intents

- [INIntentsRestrictedWhileLocked](inintentsrestrictedwhilelocked.md): The names of the intent classes your app can’t handle when the user locks the device.
- [INIntentsRestrictedWhileProtectedDataUnavailable](inintentsrestrictedwhileprotecteddataunavailable.md): The names of the intent classes your app can’t handle when the user locks the device or the system blocks access to protected data.
- [INSupportedMediaCategories](insupportedmediacategories.md): Types of media supported by your app’s media-playing intents.
- [NSFocusStatusUsageDescription](nsfocusstatususagedescription.md): A message that tells people why your app requests access to a person’s focus status.
