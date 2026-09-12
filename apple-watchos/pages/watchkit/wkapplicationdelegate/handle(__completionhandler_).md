> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkapplicationdelegate/handle(_:completionhandler:)](https://developer.apple.com/documentation/watchkit/wkapplicationdelegate/handle(_:completionhandler:))

# handle(\_:completionHandler:) (Swift)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 7.0+

Responds to a Siri intent.

## Declaration

```swift
optional func handle(_ intent: INIntent, completionHandler: @escaping (INIntentResponse) -> Void)
```

```swift
optional func handle(_ intent: INIntent) async -> INIntentResponse
```

## Parameters

- `intent`: An intent containing information about the user’s request.
- `completionHandler`: A closure that you call as soon as you finish handling the intent.

<a id="Discussion"></a>

## Discussion

The system calls this method when it receives a Siri intent. Implement a method that handles the incoming intent, and then call the completion handler as quickly as possible.

## See Also

### Related Documentation

- [WKIntentDidRunRefreshBackgroundTask](../wkintentdidrunrefreshbackgroundtask.md): A background task used to update your app after a SiriKit intent runs.

# handleIntent:completionHandler: (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 7.0+

Responds to a Siri intent.

## Declaration

```objectivec
- (void) handleIntent:(INIntent *) intent completionHandler:(void (^)(INIntentResponse *intentResponse)) completionHandler;
```

## Parameters

- `intent`: An intent containing information about the user’s request.
- `completionHandler`: A closure that you call as soon as you finish handling the intent.

<a id="Discussion"></a>

## Discussion

The system calls this method when it receives a Siri intent. Implement a method that handles the incoming intent, and then call the completion handler as quickly as possible.

## See Also

### Related Documentation

- [WKIntentDidRunRefreshBackgroundTask](../wkintentdidrunrefreshbackgroundtask.md): A background task used to update your app after a SiriKit intent runs.
