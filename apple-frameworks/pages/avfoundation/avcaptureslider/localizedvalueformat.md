> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcaptureslider/localizedvalueformat](https://developer.apple.com/documentation/avfoundation/avcaptureslider/localizedvalueformat)

# localizedValueFormat (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+

A localized string that defines the presentation of the slider’s value.

## Declaration

```swift
var localizedValueFormat: String? { get set }
```

<a id="Discussion"></a>

## Discussion

Specify a format string to modify the presentation of a slider’s value. The format string may only contain `%@` and no other placeholders like `%d`, `%s`, and so on. Setting an Invalid format string results in the value’s default presentation.

Examples of valid format strings are:

- “%@%” for “40%”
- “%@ fps” for “60 fps”
- “+ %@” for “+ 20”

## See Also

### Accessing the control value

- [value](value.md): The current value of the slider.
- [prominentValues](prominentvalues-199dz.md): Values in this array may receive unique visual representations or behaviors.

# localizedValueFormat (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+

A localized string that defines the presentation of the slider’s value.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSString * localizedValueFormat;
```

<a id="Discussion"></a>

## Discussion

Specify a format string to modify the presentation of a slider’s value. The format string may only contain `%@` and no other placeholders like `%d`, `%s`, and so on. Setting an Invalid format string results in the value’s default presentation.

Examples of valid format strings are:

- “%@%” for “40%”
- “%@ fps” for “60 fps”
- “+ %@” for “+ 20”

## See Also

### Accessing the control value

- [value](value.md): The current value of the slider.
- [prominentValues](prominentvalues-7usgc.md): Values in this array may receive unique visual representations or behaviors.
