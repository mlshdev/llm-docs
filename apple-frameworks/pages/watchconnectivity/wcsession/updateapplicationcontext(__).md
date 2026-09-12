> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/watchconnectivity/wcsession/updateapplicationcontext(_:)](https://developer.apple.com/documentation/watchconnectivity/wcsession/updateapplicationcontext(_:))

# updateApplicationContext(\_:) (Swift)

**Framework:** Watch Connectivity  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 9.0+ · visionOS 1.0+ · watchOS 2.0+

Sends a dictionary of values that a paired and active device can use to synchronize its state.

## Declaration

```swift
func updateApplicationContext(_ applicationContext: [String : Any]) throws
```

## Parameters

- `applicationContext`: A dictionary of property list values. You define the meaning of the dictionary contents. This parameter must not be `nil`.

<a id="Discussion"></a>

## Discussion

Use this method to transfer a dictionary of data items to the counterpart app. The system sends context data when the opportunity arises, with the goal of having the data ready to use by the time the counterpart wakes up. The counterpart’s session delivers the data to the [session(\_:didReceiveApplicationContext:)](../wcsessiondelegate/session%28__didreceiveapplicationcontext_%29.md) method of its delegate. A counterpart can also retrieve the data from the [receivedApplicationContext](receivedapplicationcontext.md) property of its session.

This method replaces the previous dictionary that was set, so you should use this method to communicate state changes or to deliver data that is updated frequently anyway. For example, this method is well suited for updating your app’s glance.

You may call this method when the counterpart is not currently reachable.

This method can only be called while the session is active—that is, the [activationState](activationstate.md) property is set to  [WCSessionActivationState.activated](../wcsessionactivationstate/activated.md). Calling this method for an inactive or deactivated session is a programmer error.

> **Handling Errors in Swift**

>  In Swift, this method returns `Void` and is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## See Also

### Managing Background Updates

- [applicationContext](applicationcontext.md): The most recent contextual data sent to the paired and active device.
- [receivedApplicationContext](receivedapplicationcontext.md): A dictionary containing the last update data received from a paired and active device.

# updateApplicationContext:error: (Objective-C)

**Framework:** Watch Connectivity  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · visionOS 1.0+ · watchOS 2.0+

Sends a dictionary of values that a paired and active device can use to synchronize its state.

## Declaration

```objectivec
- (BOOL) updateApplicationContext:(NSDictionary<NSString *,id> *) applicationContext error:(NSError **) error;
```

## Parameters

- `applicationContext`: A dictionary of property list values. You define the meaning of the dictionary contents. This parameter must not be `nil`.
- `error`: On input, a pointer to an error object. On output, the pointer is set to an error object if a problem occurred. You may specify `nil` if you do not care about error information.

<a id="return-value"></a>

## Return Value

An error indicating the reason why the update could not be sent to the counterpart. Calls to this method can fail when the dictionary does not contain property-list data types.

<a id="Discussion"></a>

## Discussion

Use this method to transfer a dictionary of data items to the counterpart app. The system sends context data when the opportunity arises, with the goal of having the data ready to use by the time the counterpart wakes up. The counterpart’s session delivers the data to the [session:didReceiveApplicationContext:](../wcsessiondelegate/session%28__didreceiveapplicationcontext_%29.md) method of its delegate. A counterpart can also retrieve the data from the [receivedApplicationContext](receivedapplicationcontext.md) property of its session.

This method replaces the previous dictionary that was set, so you should use this method to communicate state changes or to deliver data that is updated frequently anyway. For example, this method is well suited for updating your app’s glance.

You may call this method when the counterpart is not currently reachable.

This method can only be called while the session is active—that is, the [activationState](activationstate.md) property is set to  [WCSessionActivationStateActivated](../wcsessionactivationstate/activated.md). Calling this method for an inactive or deactivated session is a programmer error.

> **Handling Errors in Swift**

>  In Swift, this method returns `Void` and is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## See Also

### Managing Background Updates

- [applicationContext](applicationcontext.md): The most recent contextual data sent to the paired and active device.
- [receivedApplicationContext](receivedapplicationcontext.md): A dictionary containing the last update data received from a paired and active device.
