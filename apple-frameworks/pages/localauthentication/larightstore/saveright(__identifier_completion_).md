> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/localauthentication/larightstore/saveright(_:identifier:completion:)](https://developer.apple.com/documentation/localauthentication/larightstore/saveright(_:identifier:completion:))

# saveRight(\_:identifier:completion:) (Swift)

**Framework:** Local Authentication  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

Saves a right to a persistent right store.

## Declaration

```swift
func saveRight(_ right: LARight, identifier: String, completion handler: @escaping @Sendable (LAPersistedRight?, (any Error)?) -> Void)
```

```swift
func saveRight(_ right: LARight, identifier: String) async throws -> LAPersistedRight
```

## Parameters

- `right`: The right to store.
- `identifier`: A unique identifier for the right.
- `handler`: A completion handler to call when the save operation completes.

  - **`right`**: The persisted form of the right that the save operation stores.
  - **`error`**: An error object that indicates why the `right` parameter is `nil`, or `nil` if the right parameter is non-`nil`.

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func saveRight(_ right: LARight, identifier: String) async throws -> LAPersistedRight
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

## See Also

### Storing rights

- [saveRight(\_:identifier:secret:completion:)](saveright%28__identifier_secret_completion_%29.md): Saves a right to a persistent store along with secret data you supply.

# saveRight:identifier:completion: (Objective-C)

**Framework:** Local Authentication  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

Saves a right to a persistent right store.

## Declaration

```objectivec
- (void) saveRight:(LARight *) right identifier:(NSString *) identifier completion:(void (^)(LAPersistedRight *, NSError *)) handler;
```

## Parameters

- `right`: The right to store.
- `identifier`: A unique identifier for the right.
- `handler`: A completion handler to call when the save operation completes.

  - **`right`**: The persisted form of the right that the save operation stores.
  - **`error`**: An error object that indicates why the `right` parameter is `nil`, or `nil` if the right parameter is non-`nil`.

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func saveRight(_ right: LARight, identifier: String) async throws -> LAPersistedRight
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

## See Also

### Storing rights

- [saveRight:identifier:secret:completion:](saveright%28__identifier_secret_completion_%29.md): Saves a right to a persistent store along with secret data you supply.
