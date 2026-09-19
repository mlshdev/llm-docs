> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/apptrackingtransparency/attrackingmanager/requesttrackingauthorization(usingexpandedinterface:additionalinformationaction:completionhandler:)

# requestTrackingAuthorization(usingExpandedInterface:additionalInformationAction:completionHandler:) (Swift)

**Framework:** App Tracking Transparency  
**Kind:** Type Method  
**Availability:** iOS 27.2+ beta · iPadOS 27.2+ beta · Mac Catalyst 27.2+ beta

Presents a modal UI that asks someone for permission to access data that your app can use to track a person or device.

## Declaration

```swift
class func requestTrackingAuthorization(usingExpandedInterface preferExpandedInterface: Bool, additionalInformationAction: (() -> Void)?, completionHandler completion: @escaping @Sendable (ATTrackingManager.AuthorizationStatus) -> Void)
```

```swift
class func requestTrackingAuthorization(usingExpandedInterface preferExpandedInterface: Bool, additionalInformationAction: (() -> Void)?) async -> ATTrackingManager.AuthorizationStatus
```

## Parameters

- `preferExpandedInterface`: A Boolean value that requests that the system present a full-page sheet instead of a system alert.
- `additionalInformationAction`: An action to perform when someone taps Additional Information; pass `nil` to omit the button.

<a id="discussion"></a>

## Discussion

This method requests authorization to access app-related data that the app can use to track the person or the device. The method augments the regular authorization request flow (see [requestTrackingAuthorization(completionHandler:)](requesttrackingauthorization%28completionhandler_%29.md)) by adding functionality to the modal UI with the option of requesting a full-page sheet, Markdown-formatted text, and an optional Additional Information button.

<a id="Display-a-full-page-sheet"></a>

## Display a full-page sheet

The functionality this method adds to the authorization process is available regionally, and requires the device to be located in a specific European Union country and signed in with an Apple Account with a specific EU country or region:

- **France, Germany, Italy, Poland, and Romania**: The system displays markdown text you supply via [NSUserTrackingMarkdownUsageDescription](../../bundleresources/information-property-list/nsusertrackingmarkdownusagedescription.md) in a full-page sheet regardless of what you set for `preferExpandedInterface`, and includes an Additional Information button if you supply an action.
- **The European Union**: The system displays markdown text in the [NSUserTrackingMarkdownUsageDescription](../../bundleresources/information-property-list/nsusertrackingmarkdownusagedescription.md), if you supply it. The system displays the full-page sheet if you set `preferExpandedInterface` to `true`, and includes an Additional Information button if you supply an action.

Outside of the European Union, the system doesn’t use either parameter, and presents a system alert displaying the original [NSUserTrackingUsageDescription](../../bundleresources/information-property-list/nsusertrackingusagedescription.md), which is equivalent to calling [requestTrackingAuthorization(completionHandler:)](requesttrackingauthorization%28completionhandler_%29.md).

<a id="Handle-the-persons-response"></a>

## Handle the person’s response

When the person answers the prompt, the system calls the argument completion handler with a status object ([ATTrackingManager.AuthorizationStatus](authorizationstatus.md)) set to [ATTrackingManager.AuthorizationStatus.authorized](authorizationstatus/authorized.md) or [ATTrackingManager.AuthorizationStatus.denied](authorizationstatus/denied.md), depending on the person’s response.

The status is [ATTrackingManager.AuthorizationStatus.notDetermined](authorizationstatus/notdetermined.md) if the system dismisses the prompt without a decision from the person; in this case, your app needs to call this method again to receive an authorization answer from the person.

In some cases, the system doesn’t display the prompt and instead runs your completion handler immediately. The system doesn’t prompt the person when:

- Tracking is restricted for the device; in this case, the [trackingAuthorizationStatus](trackingauthorizationstatus.md) is [ATTrackingManager.AuthorizationStatus.restricted](authorizationstatus/restricted.md) regardless of whether the system has shown the person the prompt.
- The person disables “Allow Apps to Request to Track” (called “Allow Apps to Request to Link Your Activity Across Companies” in the European Union) in Settings \> Privacy & Security \> Tracking.
- An existing permission request is pending.
- Your code invokes this method through an app extension.
- The app’s state is a value other than `UIApplicationStateActive`.

<a id="Provide-additional-information"></a>

## Provide additional information

If someone taps Additional Information, the sheet dismisses without recording an answer, and your `additionalInformationAction` closure runs. In your closure, present your own custom UI that provides more information to assist people in their decision making. Then call this method again to ask for permission once more.

The completion handler still runs after an Additional Information button tap, receiving [ATTrackingManager.AuthorizationStatus.notDetermined](authorizationstatus/notdetermined.md), since the person hasn’t yet made a decision.

<a id="Prompt-again-after-a-year"></a>

## Prompt again after a year

In the European Union, if a person answers the prompt, the system notes the date and doesn’t allow the prompt to display again until a year passes. You can make an additional request after a year whether the person approves or denies your app’s previous tracking request, unless the person disables tracking in Settings \> Privacy & Security \> Tracking.

<a id="Configure-the-apps-target-properties"></a>

## Configure the app’s target properties

To use this method, add the [NSUserTrackingUsageDescription](../../bundleresources/information-property-list/nsusertrackingusagedescription.md) key to your app’s target properties in Xcode.

> **Important**

> In the European Union, if your app’s target properties in Xcode also include [NSUserTrackingMarkdownUsageDescription](../../bundleresources/information-property-list/nsusertrackingmarkdownusagedescription.md), the full-page sheet uses that string instead, with support for bold text, italic text, bullet lists, and paragraph breaks.

## See Also

### Authorization requests

- [requestTrackingAuthorization(completionHandler:)](requesttrackingauthorization%28completionhandler_%29.md): Presents a modal UI that asks someone for permission to access data that your app can use to track a person or device.
- [NSUserTrackingMarkdownUsageDescription](../../bundleresources/information-property-list/nsusertrackingmarkdownusagedescription.md): Beta. A message that explains the purpose for accessing data that an application can use to track a person or device.

# requestTrackingAuthorizationUsingExpandedInterface:additionalInformationAction:completionHandler: (Objective-C)

**Framework:** App Tracking Transparency  
**Kind:** Type Method  
**Availability:** iOS 27.2+ beta · iPadOS 27.2+ beta · Mac Catalyst 27.2+ beta

Presents a modal UI that asks someone for permission to access data that your app can use to track a person or device.

## Declaration

```objectivec
+ (void) requestTrackingAuthorizationUsingExpandedInterface:(BOOL) preferExpandedInterface additionalInformationAction:(void (^)()) additionalInformationAction completionHandler:(void (^)(ATTrackingManagerAuthorizationStatus status)) completion;
```

## Parameters

- `preferExpandedInterface`: A Boolean value that requests that the system present a full-page sheet instead of a system alert.
- `additionalInformationAction`: An action to perform when someone taps Additional Information; pass `nil` to omit the button.

<a id="discussion"></a>

## Discussion

This method requests authorization to access app-related data that the app can use to track the person or the device. The method augments the regular authorization request flow (see [requestTrackingAuthorizationWithCompletionHandler:](requesttrackingauthorization%28completionhandler_%29.md)) by adding functionality to the modal UI with the option of requesting a full-page sheet, Markdown-formatted text, and an optional Additional Information button.

<a id="Display-a-full-page-sheet"></a>

## Display a full-page sheet

The functionality this method adds to the authorization process is available regionally, and requires the device to be located in a specific European Union country and signed in with an Apple Account with a specific EU country or region:

- **France, Germany, Italy, Poland, and Romania**: The system displays markdown text you supply via [NSUserTrackingMarkdownUsageDescription](../../bundleresources/information-property-list/nsusertrackingmarkdownusagedescription.md) in a full-page sheet regardless of what you set for `preferExpandedInterface`, and includes an Additional Information button if you supply an action.
- **The European Union**: The system displays markdown text in the [NSUserTrackingMarkdownUsageDescription](../../bundleresources/information-property-list/nsusertrackingmarkdownusagedescription.md), if you supply it. The system displays the full-page sheet if you set `preferExpandedInterface` to `true`, and includes an Additional Information button if you supply an action.

Outside of the European Union, the system doesn’t use either parameter, and presents a system alert displaying the original [NSUserTrackingUsageDescription](../../bundleresources/information-property-list/nsusertrackingusagedescription.md), which is equivalent to calling [requestTrackingAuthorizationWithCompletionHandler:](requesttrackingauthorization%28completionhandler_%29.md).

<a id="Handle-the-persons-response"></a>

## Handle the person’s response

When the person answers the prompt, the system calls the argument completion handler with a status object ([ATTrackingManagerAuthorizationStatus](authorizationstatus.md)) set to [ATTrackingManagerAuthorizationStatusAuthorized](authorizationstatus/authorized.md) or [ATTrackingManagerAuthorizationStatusDenied](authorizationstatus/denied.md), depending on the person’s response.

The status is [ATTrackingManagerAuthorizationStatusNotDetermined](authorizationstatus/notdetermined.md) if the system dismisses the prompt without a decision from the person; in this case, your app needs to call this method again to receive an authorization answer from the person.

In some cases, the system doesn’t display the prompt and instead runs your completion handler immediately. The system doesn’t prompt the person when:

- Tracking is restricted for the device; in this case, the [trackingAuthorizationStatus](trackingauthorizationstatus.md) is [ATTrackingManagerAuthorizationStatusRestricted](authorizationstatus/restricted.md) regardless of whether the system has shown the person the prompt.
- The person disables “Allow Apps to Request to Track” (called “Allow Apps to Request to Link Your Activity Across Companies” in the European Union) in Settings \> Privacy & Security \> Tracking.
- An existing permission request is pending.
- Your code invokes this method through an app extension.
- The app’s state is a value other than `UIApplicationStateActive`.

<a id="Provide-additional-information"></a>

## Provide additional information

If someone taps Additional Information, the sheet dismisses without recording an answer, and your `additionalInformationAction` closure runs. In your closure, present your own custom UI that provides more information to assist people in their decision making. Then call this method again to ask for permission once more.

The completion handler still runs after an Additional Information button tap, receiving [ATTrackingManagerAuthorizationStatusNotDetermined](authorizationstatus/notdetermined.md), since the person hasn’t yet made a decision.

<a id="Prompt-again-after-a-year"></a>

## Prompt again after a year

In the European Union, if a person answers the prompt, the system notes the date and doesn’t allow the prompt to display again until a year passes. You can make an additional request after a year whether the person approves or denies your app’s previous tracking request, unless the person disables tracking in Settings \> Privacy & Security \> Tracking.

<a id="Configure-the-apps-target-properties"></a>

## Configure the app’s target properties

To use this method, add the [NSUserTrackingUsageDescription](../../bundleresources/information-property-list/nsusertrackingusagedescription.md) key to your app’s target properties in Xcode.

> **Important**

> In the European Union, if your app’s target properties in Xcode also include [NSUserTrackingMarkdownUsageDescription](../../bundleresources/information-property-list/nsusertrackingmarkdownusagedescription.md), the full-page sheet uses that string instead, with support for bold text, italic text, bullet lists, and paragraph breaks.

## See Also

### Authorization requests

- [requestTrackingAuthorizationWithCompletionHandler:](requesttrackingauthorization%28completionhandler_%29.md): Presents a modal UI that asks someone for permission to access data that your app can use to track a person or device.
- [NSUserTrackingMarkdownUsageDescription](../../bundleresources/information-property-list/nsusertrackingmarkdownusagedescription.md): Beta. A message that explains the purpose for accessing data that an application can use to track a person or device.
