> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/familycontrols/authorizationcenter/requestauthorization(completionhandler:)

# requestAuthorization(completionHandler:)

**Framework:** Family Controls  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ (deprecated in 16.0) · iPadOS 15.0+ (deprecated in 16.0)

Requests authorization to provide parental controls for a child.

> Use [requestAuthorization(for:)](requestauthorization%28for_%29.md) instead.

## Declaration

```swift
func requestAuthorization(completionHandler: @escaping (Result<Void, any Error>) -> Void)
```

## Parameters

- `completionHandler`: A closure the system calls after it completes the authorization request.
