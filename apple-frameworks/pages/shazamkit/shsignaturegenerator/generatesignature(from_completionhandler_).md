> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/shazamkit/shsignaturegenerator/generatesignature(from:completionhandler:)](https://developer.apple.com/documentation/shazamkit/shsignaturegenerator/generatesignature(from:completionhandler:))

# generateSignature(from:completionHandler:) (Swift)

**Framework:** ShazamKit  
**Kind:** Type Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Creates a signature with the asset you specify.

## Declaration

```swift
class func generateSignature(from asset: AVAsset, completionHandler: @escaping @Sendable (SHSignature?, (any Error)?) -> Void)
```

```swift
class func signature(from asset: AVAsset) async throws -> SHSignature
```

## Parameters

- `asset`: An asset that contains the audio to convert.
- `completionHandler`: The system calls this completion block after creating the signature, or an error if the system couldn’t create it.

  This block takes the following parameters:

  - **`signature`**: A new signature instance.
  - **error**: An error object if a problem occurs when creating thesignature; otherwise, `nil`.

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> class func signature(from asset: AVAsset) async throws -> SHSignature
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

The asset you specify can be any type of media that contains audio tracks. If the asset has multiple tracks, the system mixes them into one [SHSignature](../shsignature.md).

# generateSignatureFromAsset:completionHandler: (Objective-C)

**Framework:** ShazamKit  
**Kind:** Type Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Creates a signature with the asset you specify.

## Declaration

```objectivec
+ (void) generateSignatureFromAsset:(AVAsset *) asset completionHandler:(void (^)(SHSignature *signature, NSError *error)) completionHandler;
```

## Parameters

- `asset`: An asset that contains the audio to convert.
- `completionHandler`: The system calls this completion block after creating the signature, or an error if the system couldn’t create it.

  This block takes the following parameters:

  - **`signature`**: A new signature instance.
  - **error**: An error object if a problem occurs when creating thesignature; otherwise, `nil`.

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> class func signature(from asset: AVAsset) async throws -> SHSignature
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

The asset you specify can be any type of media that contains audio tracks. If the asset has multiple tracks, the system mixes them into one [SHSignature](../shsignature.md).
