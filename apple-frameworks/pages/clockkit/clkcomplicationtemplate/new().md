> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/clockkit/clkcomplicationtemplate/new()](https://developer.apple.com/documentation/clockkit/clkcomplicationtemplate/new())

# new() (Swift)

**Framework:** ClockKit  
**Kind:** Type Method  
**Availability:** watchOS 2.0+ (deprecated in 7.0)

Returns a new complication.

> Creating a template without parameters is deprecated in watchOS 7.0. Use a factory method with parameters instead.

## Declaration

```swift
class func new() -> Self
```

<a id="Discussion"></a>

## Discussion

You shouldn’t create instances of this class directly. Instead, you create instances of one of the concrete subclasses and use the resulting object to specify the data for your complication.

## See Also

### Creating Empty Templates

- [init()](init%28%29.md): Deprecated. Creates a new complication.

# new (Objective-C)

**Framework:** ClockKit  
**Kind:** Type Method  
**Availability:** watchOS 2.0+ (deprecated in 7.0)

Returns a new complication.

> Creating a template without parameters is deprecated in watchOS 7.0. Use a factory method with parameters instead.

## Declaration

```objectivec
+ (instancetype) new;
```

<a id="Discussion"></a>

## Discussion

You shouldn’t create instances of this class directly. Instead, you create instances of one of the concrete subclasses and use the resulting object to specify the data for your complication.

## See Also

### Creating Empty Templates

- [init](init%28%29.md): Deprecated. Creates a new complication.
