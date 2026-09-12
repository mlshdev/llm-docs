> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/safariservices/sfsafariwindow/getalltabs(completionhandler:)](https://developer.apple.com/documentation/safariservices/sfsafariwindow/getalltabs(completionhandler:))

# getAllTabs(completionHandler:) (Swift)

**Framework:** Safari Services  
**Kind:** Instance Method  
**Availability:** macOS 10.14.4+

## Declaration

```swift
func getAllTabs(completionHandler: @escaping @Sendable ([SFSafariTab]) -> Void)
```

```swift
func allTabs() async -> [SFSafariTab]
```

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func allTabs() async -> [SFSafariTab]
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

## See Also

### Instance Methods

- [close()](close%28%29.md)

# getAllTabsWithCompletionHandler: (Objective-C)

**Framework:** Safari Services  
**Kind:** Instance Method  
**Availability:** macOS 10.14.4+

## Declaration

```objectivec
- (void) getAllTabsWithCompletionHandler:(void (^)(NSArray<SFSafariTab *> *tabs)) completionHandler;
```

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func allTabs() async -> [SFSafariTab]
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

## See Also

### Instance Methods

- [close](close%28%29.md)
