> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uifocusdebugger/help()](https://developer.apple.com/documentation/uikit/uifocusdebugger/help())

# help() (Swift)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · tvOS 11.0+ · visionOS 1.0+

Returns information about how to use the commands of the debugger object.

## Declaration

```swift
class func help() -> any UIFocusDebuggerOutput
```

<a id="Discussion"></a>

## Discussion

Call this method from the `lldb` debugger using the following commands:

**Swift**

```swift
po UIFocusDebugger.help()
```

**Objective-C**

```objc
po [UIFocusDebugger help]
```

The method returns information about how to use the other methods of this class to get information.

# help (Objective-C)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · tvOS 11.0+ · visionOS 1.0+

Returns information about how to use the commands of the debugger object.

## Declaration

```objectivec
+ (id<UIFocusDebuggerOutput>) help;
```

<a id="Discussion"></a>

## Discussion

Call this method from the `lldb` debugger using the following commands:

**Swift**

```swift
po UIFocusDebugger.help()
```

**Objective-C**

```objc
po [UIFocusDebugger help]
```

The method returns information about how to use the other methods of this class to get information.
