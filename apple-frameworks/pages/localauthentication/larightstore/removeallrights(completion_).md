> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/localauthentication/larightstore/removeallrights(completion:)

# removeAllRights(completion:) (Swift)

**Framework:** Local Authentication  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

Removes all rights associated with this client from the right store.

## Declaration

```swift
func removeAllRights(completion handler: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func removeAllRights() async throws
```

## Parameters

- `handler`: A completion handler to call when the removal operation completes.

  - **`error`**: An error object that indicates why the removal operation failed, or `nil` if it succeeded.

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func removeAllRights() async throws
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

Removing rights also removes any resources stored along with the rights, such as secrets.

## See Also

### Removing stored rights

- [removeRight(\_:completion:)](removeright%28__completion_%29.md): Removes a right from the right store given an instance of that right.
- [removeRight(forIdentifier:completion:)](removeright%28foridentifier_completion_%29.md): Removes a right from the right store given its unique identifier.

# removeAllRightsWithCompletion: (Objective-C)

**Framework:** Local Authentication  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

Removes all rights associated with this client from the right store.

## Declaration

```objectivec
- (void) removeAllRightsWithCompletion:(void (^)(NSError *error)) handler;
```

## Parameters

- `handler`: A completion handler to call when the removal operation completes.

  - **`error`**: An error object that indicates why the removal operation failed, or `nil` if it succeeded.

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func removeAllRights() async throws
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

Removing rights also removes any resources stored along with the rights, such as secrets.

## See Also

### Removing stored rights

- [removeRight:completion:](removeright%28__completion_%29.md): Removes a right from the right store given an instance of that right.
- [removeRightForIdentifier:completion:](removeright%28foridentifier_completion_%29.md): Removes a right from the right store given its unique identifier.
