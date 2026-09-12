> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/localauthentication/larightstore/removeright(_:completion:)](https://developer.apple.com/documentation/localauthentication/larightstore/removeright(_:completion:))

# removeRight(\_:completion:) (Swift)

**Framework:** Local Authentication  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

Removes a right from the right store given an instance of that right.

## Declaration

```swift
func removeRight(_ right: LAPersistedRight, completion handler: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func removeRight(_ right: LAPersistedRight) async throws
```

## Parameters

- `right`: An instance that represents the right to remove.
- `handler`: A completion handler to call when the removal operation completes.

  - **`error`**: An error object that indicates why the removal operation failed, or `nil` if it succeeded.

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func removeRight(_ right: LAPersistedRight) async throws
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

Removing a right also removes any resources stored along with the right, such as secrets.

## See Also

### Removing stored rights

- [removeRight(forIdentifier:completion:)](removeright%28foridentifier_completion_%29.md): Removes a right from the right store given its unique identifier.
- [removeAllRights(completion:)](removeallrights%28completion_%29.md): Removes all rights associated with this client from the right store.

# removeRight:completion: (Objective-C)

**Framework:** Local Authentication  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

Removes a right from the right store given an instance of that right.

## Declaration

```objectivec
- (void) removeRight:(LAPersistedRight *) right completion:(void (^)(NSError *error)) handler;
```

## Parameters

- `right`: An instance that represents the right to remove.
- `handler`: A completion handler to call when the removal operation completes.

  - **`error`**: An error object that indicates why the removal operation failed, or `nil` if it succeeded.

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func removeRight(_ right: LAPersistedRight) async throws
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

Removing a right also removes any resources stored along with the right, such as secrets.

## See Also

### Removing stored rights

- [removeRightForIdentifier:completion:](removeright%28foridentifier_completion_%29.md): Removes a right from the right store given its unique identifier.
- [removeAllRightsWithCompletion:](removeallrights%28completion_%29.md): Removes all rights associated with this client from the right store.
