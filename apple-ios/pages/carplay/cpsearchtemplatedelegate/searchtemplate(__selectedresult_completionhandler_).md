> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpsearchtemplatedelegate/searchtemplate(_:selectedresult:completionhandler:)](https://developer.apple.com/documentation/carplay/cpsearchtemplatedelegate/searchtemplate(_:selectedresult:completionhandler:))

# searchTemplate(\_:selectedResult:completionHandler:) (Swift)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

Tells the delegate that the user selected an item from the search result.

## Declaration

```swift
func searchTemplate(_ searchTemplate: CPSearchTemplate, selectedResult item: CPListItem, completionHandler: @escaping () -> Void)
```

```swift
func searchTemplate(_ searchTemplate: CPSearchTemplate, selectedResult item: CPListItem) async
```

## Parameters

- `searchTemplate`: The current search template.
- `item`: The search result item selected by the user.
- `completionHandler`: The block that you must call after processing the selected result item.

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func searchTemplate(_ searchTemplate: CPSearchTemplate, selectedResult item: CPListItem) async
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

Your implementation must call the completion handler after processing the selected result item.

# searchTemplate:selectedResult:completionHandler: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

Tells the delegate that the user selected an item from the search result.

## Declaration

```objectivec
- (void) searchTemplate:(CPSearchTemplate *) searchTemplate selectedResult:(CPListItem *) item completionHandler:(void (^)()) completionHandler;
```

## Parameters

- `searchTemplate`: The current search template.
- `item`: The search result item selected by the user.
- `completionHandler`: The block that you must call after processing the selected result item.

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func searchTemplate(_ searchTemplate: CPSearchTemplate, selectedResult item: CPListItem) async
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

Your implementation must call the completion handler after processing the selected result item.
