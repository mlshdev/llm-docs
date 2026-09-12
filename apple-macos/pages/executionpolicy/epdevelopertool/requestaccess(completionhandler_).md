> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/executionpolicy/epdevelopertool/requestaccess(completionhandler:)](https://developer.apple.com/documentation/executionpolicy/epdevelopertool/requestaccess(completionhandler:))

# requestAccess(completionHandler:) (Swift)

**Framework:** Execution Policy  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.15+

## Declaration

```swift
func requestAccess(completionHandler handler: @escaping @Sendable (Bool) -> Void)
```

```swift
func requestAccess() async -> Bool
```

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func requestAccess() async -> Bool
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

# requestDeveloperToolAccessWithCompletionHandler: (Objective-C)

**Framework:** Execution Policy  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.15+

## Declaration

```objectivec
- (void) requestDeveloperToolAccessWithCompletionHandler:(void (^)(BOOL granted)) handler;
```

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func requestAccess() async -> Bool
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).
