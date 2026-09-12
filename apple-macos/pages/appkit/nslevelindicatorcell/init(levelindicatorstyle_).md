> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nslevelindicatorcell/init(levelindicatorstyle:)](https://developer.apple.com/documentation/appkit/nslevelindicatorcell/init(levelindicatorstyle:))

# init(levelIndicatorStyle:) (Swift)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** macOS

Initializes the receiver with the style specified by `levelIndicatorStyle`.

## Declaration

```swift
init(levelIndicatorStyle: NSLevelIndicator.Style)
```

<a id="Discussion"></a>

## Discussion

The default value and minimum value are `0.0`. The default maximum value is dependent on `levelIndicatorStyle`. For continuous styles, the default maximum value is `100.0`. For discrete styles, the default maximum value is `5.0`.

# initWithLevelIndicatorStyle: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Initializes the receiver with the style specified by `levelIndicatorStyle`.

## Declaration

```objectivec
- (instancetype) initWithLevelIndicatorStyle:(NSLevelIndicatorStyle) levelIndicatorStyle;
```

<a id="Discussion"></a>

## Discussion

The default value and minimum value are `0.0`. The default maximum value is dependent on `levelIndicatorStyle`. For continuous styles, the default maximum value is `100.0`. For discrete styles, the default maximum value is `5.0`.
