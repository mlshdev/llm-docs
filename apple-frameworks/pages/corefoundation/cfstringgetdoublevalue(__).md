> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfstringgetdoublevalue(_:)](https://developer.apple.com/documentation/corefoundation/cfstringgetdoublevalue(_:))

# CFStringGetDoubleValue(\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns the primary `double` value represented by a string.

## Declaration

```swift
func CFStringGetDoubleValue(_ str: CFString!) -> Double
```

## Parameters

- `str`: A string that represents a double value. The only allowed characters are the ASCII digit characters (ASCII `0x30` \- `0x39`), the plus sign (ASCII `0x2B`), the minus sign (ASCII `0x2D`), and the period character (ASCII `0x2E`).

<a id="return-value"></a>

## Return Value

The `double` value represented by `str`, or `0.0` if there is a scanning error (if the string contains disallowed characters or does not represent a double value).

<a id="Discussion"></a>

## Discussion

Consider the following example:

```objc
double val = CFStringGetDoubleValue(CFSTR("0.123"));
```

The variable `val` in this example would contain the value `0.123` after the function is called.

## See Also

### Getting Numeric Values

- [CFStringGetIntValue(\_:)](cfstringgetintvalue%28__%29.md): Returns the integer value represented by a string.

# CFStringGetDoubleValue (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns the primary `double` value represented by a string.

## Declaration

```objectivec
extern double CFStringGetDoubleValue(CFStringRef str);
```

## Parameters

- `str`: A string that represents a double value. The only allowed characters are the ASCII digit characters (ASCII `0x30` \- `0x39`), the plus sign (ASCII `0x2B`), the minus sign (ASCII `0x2D`), and the period character (ASCII `0x2E`).

<a id="return-value"></a>

## Return Value

The `double` value represented by `str`, or `0.0` if there is a scanning error (if the string contains disallowed characters or does not represent a double value).

<a id="Discussion"></a>

## Discussion

Consider the following example:

```objc
double val = CFStringGetDoubleValue(CFSTR("0.123"));
```

The variable `val` in this example would contain the value `0.123` after the function is called.

## See Also

### Getting Numeric Values

- [CFStringGetIntValue](cfstringgetintvalue%28__%29.md): Returns the integer value represented by a string.
