> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/instartvideocallintenthandling/resolvecontacts(for:with:)](https://developer.apple.com/documentation/intents/instartvideocallintenthandling/resolvecontacts(for:with:))

# resolveContacts(for:with:) (Swift)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ (deprecated in 13.0) · iPadOS 10.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · visionOS 1.0+ (deprecated in 1.0)

Resolves the recipients of the call.

> INStartVideoCallIntent is deprecated. Please adopt INStartCallIntent instead

## Declaration

```swift
optional func resolveContacts(for intent: INStartVideoCallIntent, with completion: @escaping @Sendable ([INPersonResolutionResult]) -> Void)
```

```swift
optional func resolveContacts(for intent: INStartVideoCallIntent) async -> [INPersonResolutionResult]
```

## Parameters

- `intent`: The intent object containing details about the user’s request. Use the information in this object to resolve the list of contacts.
- `completion`: The block to execute with the resolution. You must execute this block at some point during your implementation of this method. This block has no return value and takes the following parameter:

  - **resolutionResult**: The object containing the details of your proposed resolution. For each successful resolution, create a resolution result that includes the [INPerson](../inperson.md) object with the information that you need to call the user later.

<a id="Discussion"></a>

## Discussion

Use this method to verify the identity of any intended call recipients. Always strive toward a successful resolution to a specific user, but feel free to ask for confirmation of the selected user if there’s some uncertainty.

If you find multiple users matching the same name, consider asking the user to disambiguate from among the most likely candidates. When disambiguating users, provide as few choices as possible. If you find more than five possible users, consider a different resolution.

# resolveContactsForStartVideoCall:withCompletion: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ (deprecated in 13.0) · iPadOS 10.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · visionOS 1.0+ (deprecated in 1.0)

Resolves the recipients of the call.

> INStartVideoCallIntent is deprecated. Please adopt INStartCallIntent instead

## Declaration

```objectivec
- (void) resolveContactsForStartVideoCall:(INStartVideoCallIntent *) intent withCompletion:(void (^)(NSArray<INPersonResolutionResult *> *resolutionResults)) completion;
```

## Parameters

- `intent`: The intent object containing details about the user’s request. Use the information in this object to resolve the list of contacts.
- `completion`: The block to execute with the resolution. You must execute this block at some point during your implementation of this method. This block has no return value and takes the following parameter:

  - **resolutionResult**: The object containing the details of your proposed resolution. For each successful resolution, create a resolution result that includes the [INPerson](../inperson.md) object with the information that you need to call the user later.

<a id="Discussion"></a>

## Discussion

Use this method to verify the identity of any intended call recipients. Always strive toward a successful resolution to a specific user, but feel free to ask for confirmation of the selected user if there’s some uncertainty.

If you find multiple users matching the same name, consider asking the user to disambiguate from among the most likely candidates. When disambiguating users, provide as few choices as possible. If you find more than five possible users, consider a different resolution.
