> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/classkit/clscontextprovider/updatedescendants(of:completion:)](https://developer.apple.com/documentation/classkit/clscontextprovider/updatedescendants(of:completion:))

# updateDescendants(of:completion:) (Swift)

**Framework:** ClassKit  
**Kind:** Instance Method  
**Availability:** iOS 12.2+ · iPadOS 12.2+ · Mac Catalyst 12.2+ · macOS 11.0+ · visionOS 1.0+

Updates the descendants of the given context.

## Declaration

```swift
func updateDescendants(of context: CLSContext, completion: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func updateDescendants(of context: CLSContext) async throws
```

## Parameters

- `context`: The context whose descendant contexts the method should update.
- `completion`: A completion block the method calls when it finishes. Pass an optional error to indicate failure, or `nil` to indicate success.

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func updateDescendants(of context: CLSContext) async throws
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

When a teacher browses your app’s hierarchy of assignable content in Schoolwork, the Schoolwork app uses the [updateDescendants(of:completion:)](updatedescendants%28of_completion_%29.md) method for each context that it shows. For example, when the teacher taps on a book reader app to reveal a list of available books, Schoolwork initiates an update call for each book. In response, the method updates or creates the chapters associated with the given book.

You can use this method call to update only the context’s direct descendants — like the chapters for a given book — or the entire context hierarchy underneath the given context, like all of a book’s chapters, sections, and quizzes. Regardless, Schoolwork starts an update method call for every context at every level of hierarchy as they appear in Schoolwork’s interface.

Finish your updates and call the completion block as quickly as possible to minimize update delay in the Schoolwork interface. But only call the completion block after you’re done making changes. For example, if you need to call the data store’s [save(completion:)](../clsdatastore/save%28completion_%29.md) method, only call the update method’s completion block from within the save method’s completion handler:

```swift
func updateDescendants(of context: CLSContext, completion: @escaping (Error?) -> Void) {

    // Make updates...

    CLSDataStore.shared.save { error in
        completion(error)
    }
}
```

# updateDescendantsOfContext:completion: (Objective-C)

**Framework:** ClassKit  
**Kind:** Instance Method  
**Availability:** iOS 12.2+ · iPadOS 12.2+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

Updates the descendants of the given context.

## Declaration

```objectivec
- (void) updateDescendantsOfContext:(CLSContext *) context completion:(void (^)(NSError *error)) completion;
```

## Parameters

- `context`: The context whose descendant contexts the method should update.
- `completion`: A completion block the method calls when it finishes. Pass an optional error to indicate failure, or `nil` to indicate success.

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func updateDescendants(of context: CLSContext) async throws
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

When a teacher browses your app’s hierarchy of assignable content in Schoolwork, the Schoolwork app uses the [updateDescendantsOfContext:completion:](updatedescendants%28of_completion_%29.md) method for each context that it shows. For example, when the teacher taps on a book reader app to reveal a list of available books, Schoolwork initiates an update call for each book. In response, the method updates or creates the chapters associated with the given book.

You can use this method call to update only the context’s direct descendants — like the chapters for a given book — or the entire context hierarchy underneath the given context, like all of a book’s chapters, sections, and quizzes. Regardless, Schoolwork starts an update method call for every context at every level of hierarchy as they appear in Schoolwork’s interface.

Finish your updates and call the completion block as quickly as possible to minimize update delay in the Schoolwork interface. But only call the completion block after you’re done making changes. For example, if you need to call the data store’s [saveWithCompletion:](../clsdatastore/save%28completion_%29.md) method, only call the update method’s completion block from within the save method’s completion handler:

```swift
func updateDescendants(of context: CLSContext, completion: @escaping (Error?) -> Void) {

    // Make updates...

    CLSDataStore.shared.save { error in
        completion(error)
    }
}
```
