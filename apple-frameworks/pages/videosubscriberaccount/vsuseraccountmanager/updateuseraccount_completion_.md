> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/videosubscriberaccount/vsuseraccountmanager/updateuseraccount:completion:

# updateUserAccount:completion:

**Interface language:** Objective-C

**Framework:** Video Subscriber Account  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+

Registers a new user account.

## Declaration

```objectivec
- (void) updateUserAccount:(VSUserAccount *) account completion:(void (^)(NSError *error)) completion;
```

## Parameters

- `account`: A new user account to register.
- `completion`: The closure that the user account manager executes after the request completes. This closure has no return value and takes the following parameters:

  - **error**: An error object that contains information about a problem, or `nil` if the operation completed successfully.
