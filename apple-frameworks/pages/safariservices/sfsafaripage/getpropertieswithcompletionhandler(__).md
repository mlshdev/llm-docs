> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/safariservices/sfsafaripage/getpropertieswithcompletionhandler(_:)](https://developer.apple.com/documentation/safariservices/sfsafaripage/getpropertieswithcompletionhandler(_:))

# getPropertiesWithCompletionHandler(\_:) (Swift)

**Framework:** Safari Services  
**Kind:** Instance Method  
**Availability:** macOS 10.12+

Retrieves the properties of the webpage.

## Declaration

```swift
func getPropertiesWithCompletionHandler(_ completionHandler: @escaping @Sendable (SFSafariPageProperties?) -> Void)
```

```swift
func properties() async -> SFSafariPageProperties?
```

## Parameters

- `completionHandler`: A block to call when the properties object is returned.

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func properties() async -> SFSafariPageProperties?
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

If the extension cannot access the page—for example, the extension has web access permissions set to `None` in the Info.plist—the properties object passed to the completion handler is `nil`. See [SFSafariPageProperties](../sfsafaripageproperties.md).

# getPagePropertiesWithCompletionHandler: (Objective-C)

**Framework:** Safari Services  
**Kind:** Instance Method  
**Availability:** macOS 10.12+

Retrieves the properties of the webpage.

## Declaration

```objectivec
- (void) getPagePropertiesWithCompletionHandler:(void (^)(SFSafariPageProperties *properties)) completionHandler;
```

## Parameters

- `completionHandler`: A block to call when the properties object is returned.

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func properties() async -> SFSafariPageProperties?
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

If the extension cannot access the page—for example, the extension has web access permissions set to `None` in the Info.plist—the properties object passed to the completion handler is `nil`. See [SFSafariPageProperties](../sfsafaripageproperties.md).
