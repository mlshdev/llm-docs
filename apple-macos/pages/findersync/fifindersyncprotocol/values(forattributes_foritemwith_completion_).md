> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/findersync/fifindersyncprotocol/values(forattributes:foritemwith:completion:)](https://developer.apple.com/documentation/findersync/fifindersyncprotocol/values(forattributes:foritemwith:completion:))

# values(forAttributes:forItemWith:completion:) (Swift)

**Framework:** Finder Sync  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

## Declaration

```swift
optional func values(forAttributes attributes: [URLResourceKey], forItemWith itemURL: URL, completion: @escaping @Sendable ([URLResourceKey : Any], (any Error)?) -> Void)
```

```swift
optional func values(forAttributes attributes: [URLResourceKey], forItemWith itemURL: URL) async throws -> [URLResourceKey : Any]
```

<a id="Overview"></a>

## Overview

> **Concurrency Note**

> You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> optional func values(forAttributes attributes: [URLResourceKey], forItemWith itemURL: URL) async throws -> [URLResourceKey : Any]
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

# valuesForAttributes:forItemWithURL:completion: (Objective-C)

**Framework:** Finder Sync  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

## Declaration

```objectivec
- (void) valuesForAttributes:(NSArray<NSString *> *) attributes forItemWithURL:(NSURL *) itemURL completion:(void (^)(NSDictionary<NSString *,id> *, NSError *)) completion;
```

<a id="Overview"></a>

## Overview

> **Concurrency Note**

> You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> optional func values(forAttributes attributes: [URLResourceKey], forItemWith itemURL: URL) async throws -> [URLResourceKey : Any]
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).
