> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/ascredentialproviderextensioncontext/completerequest(withtexttoinsert:completionhandler:)](https://developer.apple.com/documentation/authenticationservices/ascredentialproviderextensioncontext/completerequest(withtexttoinsert:completionhandler:))

# completeRequest(withTextToInsert:completionHandler:) (Swift)

**Framework:** Authentication Services  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+

Provides the user-selected text.

## Declaration

```swift
func completeRequest(withTextToInsert text: String, completionHandler: (@Sendable (Bool) -> Void)? = nil)
```

```swift
func completeRequest(withTextToInsert text: String) async -> Bool
```

## Parameters

- `text`: The text to insert.
- `completionHandler`: Optional work that the extension performs as a background-priority task after the request completes. The `expired` parameter is `YES` if the system prematurely terminates a previous non-expiration invocation of the `completionHandler`.

<a id="Overview"></a>

## Overview

At some point after you call this method, the system dismisses the associated view controller.

# completeRequestWithTextToInsert:completionHandler: (Objective-C)

**Framework:** Authentication Services  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+

Provides the user-selected text.

## Declaration

```objectivec
- (void) completeRequestWithTextToInsert:(NSString *) text completionHandler:(void (^)(BOOL expired)) completionHandler;
```

## Parameters

- `text`: The text to insert.
- `completionHandler`: Optional work that the extension performs as a background-priority task after the request completes. The `expired` parameter is `YES` if the system prematurely terminates a previous non-expiration invocation of the `completionHandler`.

<a id="Overview"></a>

## Overview

At some point after you call this method, the system dismisses the associated view controller.
