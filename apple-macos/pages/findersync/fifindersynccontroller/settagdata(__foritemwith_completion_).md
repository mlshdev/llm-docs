> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/findersync/fifindersynccontroller/settagdata(_:foritemwith:completion:)](https://developer.apple.com/documentation/findersync/fifindersynccontroller/settagdata(_:foritemwith:completion:))

# setTagData(\_:forItemWith:completion:) (Swift)

**Framework:** Finder Sync  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

## Declaration

```swift
func setTagData(_ tagData: Data?, forItemWith itemURL: URL, completion: @escaping @Sendable (any Error) -> Void)
```

```swift
func setTagData(_ tagData: Data?, forItemWith itemURL: URL) async -> any Error
```

<a id="Overview"></a>

## Overview

> **Concurrency Note**

> You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func setTagData(_ tagData: Data?, forItemWith itemURL: URL) async -> Error
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

# setTagData:forItemWithURL:completion: (Objective-C)

**Framework:** Finder Sync  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

## Declaration

```objectivec
- (void) setTagData:(NSData *) tagData forItemWithURL:(NSURL *) itemURL completion:(void (^)(NSError *error)) completion;
```

<a id="Overview"></a>

## Overview

> **Concurrency Note**

> You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func setTagData(_ tagData: Data?, forItemWith itemURL: URL) async -> Error
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).
