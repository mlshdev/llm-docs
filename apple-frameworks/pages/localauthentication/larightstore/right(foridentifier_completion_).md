> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/localauthentication/larightstore/right(foridentifier:completion:)](https://developer.apple.com/documentation/localauthentication/larightstore/right(foridentifier:completion:))

# right(forIdentifier:completion:) (Swift)

**Framework:** Local Authentication  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

Fetches a previously stored right from the shared right store.

## Declaration

```swift
func right(forIdentifier identifier: String, completion handler: @escaping @Sendable (LAPersistedRight?, (any Error)?) -> Void)
```

```swift
func right(forIdentifier identifier: String) async throws -> LAPersistedRight
```

## Parameters

- `identifier`: The unique identifier of the right.
- `handler`: A completion handler to call when the right access completes.

  - **`right`**: The right that matches the `identifier` you supply.
  - **`error`**: An error object that indicates why the `right` parameter is `nil`, or `nil` if the right parameter is non-`nil`.

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func right(forIdentifier identifier: String) async throws -> LAPersistedRight
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

## See Also

### Accessing rights

- [shared](shared.md): A shared object that stores rights.

# rightForIdentifier:completion: (Objective-C)

**Framework:** Local Authentication  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

Fetches a previously stored right from the shared right store.

## Declaration

```objectivec
- (void) rightForIdentifier:(NSString *) identifier completion:(void (^)(LAPersistedRight *, NSError *)) handler;
```

## Parameters

- `identifier`: The unique identifier of the right.
- `handler`: A completion handler to call when the right access completes.

  - **`right`**: The right that matches the `identifier` you supply.
  - **`error`**: An error object that indicates why the `right` parameter is `nil`, or `nil` if the right parameter is non-`nil`.

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func right(forIdentifier identifier: String) async throws -> LAPersistedRight
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

## See Also

### Accessing rights

- [sharedStore](shared.md): A shared object that stores rights.
