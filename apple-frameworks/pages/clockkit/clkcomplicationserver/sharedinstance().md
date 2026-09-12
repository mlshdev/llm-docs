> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/clockkit/clkcomplicationserver/sharedinstance()](https://developer.apple.com/documentation/clockkit/clkcomplicationserver/sharedinstance())

# sharedInstance() (Swift)

**Framework:** ClockKit  
**Kind:** Type Method  
**Availability:** watchOS 2.0+ (deprecated in 27.0)

Returns the shared complication server.

> On watchOS 9.0 or later, use WidgetKit instead

## Declaration

```swift
class func sharedInstance() -> Self
```

<a id="Discussion"></a>

## Discussion

Always use this method to retrieve the shared complication server object. Don’t try to create instances of the object yourself.

# sharedInstance (Objective-C)

**Framework:** ClockKit  
**Kind:** Type Method  
**Availability:** watchOS 2.0+ (deprecated in 27.0)

Returns the shared complication server.

> On watchOS 9.0 or later, use WidgetKit instead

## Declaration

```objectivec
+ (instancetype) sharedInstance;
```

<a id="Discussion"></a>

## Discussion

Always use this method to retrieve the shared complication server object. Don’t try to create instances of the object yourself.
