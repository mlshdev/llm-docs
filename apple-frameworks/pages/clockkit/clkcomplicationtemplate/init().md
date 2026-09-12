> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/clockkit/clkcomplicationtemplate/init()](https://developer.apple.com/documentation/clockkit/clkcomplicationtemplate/init())

# init() (Swift)

**Framework:** ClockKit  
**Kind:** Initializer  
**Availability:** watchOS 2.0+ (deprecated in 7.0)

Creates a new complication.

> Initializing a template without parameters is deprecated in watchOS 7.0. Use an init with parameters instead.

## Declaration

```swift
init()
```

<a id="Discussion"></a>

## Discussion

You shouldn’t create instances of this class directly. Instead, you create instances of one of the concrete subclasses and use the resulting object to specify the data for your complication.

## See Also

### Creating Empty Templates

- [new()](new%28%29.md): Deprecated. Returns a new complication.

# init (Objective-C)

**Framework:** ClockKit  
**Kind:** Instance Method  
**Availability:** watchOS 2.0+ (deprecated in 7.0)

Creates a new complication.

> Initializing a template without parameters is deprecated in watchOS 7.0. Use an init with parameters instead.

## Declaration

```objectivec
- (instancetype) init;
```

<a id="Discussion"></a>

## Discussion

You shouldn’t create instances of this class directly. Instead, you create instances of one of the concrete subclasses and use the resulting object to specify the data for your complication.

## See Also

### Creating Empty Templates

- [new](new%28%29.md): Deprecated. Returns a new complication.
