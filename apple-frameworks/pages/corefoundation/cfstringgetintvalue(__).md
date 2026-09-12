> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfstringgetintvalue(_:)](https://developer.apple.com/documentation/corefoundation/cfstringgetintvalue(_:))

# CFStringGetIntValue(\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns the integer value represented by a string.

## Declaration

```swift
func CFStringGetIntValue(_ str: CFString!) -> Int32
```

## Parameters

- `str`: A string that represents a signed integer value. The only allowed characters are the ASCII digit characters (ASCII `0x30` \- `0x39`), the plus sign (ASCII `0x2B`), the minus sign (ASCII `0x2D`), and the period character (ASCII `0x2E`).

<a id="return-value"></a>

## Return Value

The signed integer value represented by `str`. The result is `0` if there is a scanning error (if the string contains disallowed characters or does not represent an integer value) or `INT_MAX` or `INT_MIN` if there is an overflow error.

<a id="Discussion"></a>

## Discussion

Consider the following example:

```objc
SInt32 val = CFStringGetIntValue(CFSTR("-123"));
```

The variable `val` in this example would contain the value `-123` after the function is called.

## See Also

### Getting Numeric Values

- [CFStringGetDoubleValue(\_:)](cfstringgetdoublevalue%28__%29.md): Returns the primary `double` value represented by a string.

# CFStringGetIntValue (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns the integer value represented by a string.

## Declaration

```objectivec
extern SInt32 CFStringGetIntValue(CFStringRef str);
```

## Parameters

- `str`: A string that represents a signed integer value. The only allowed characters are the ASCII digit characters (ASCII `0x30` \- `0x39`), the plus sign (ASCII `0x2B`), the minus sign (ASCII `0x2D`), and the period character (ASCII `0x2E`).

<a id="return-value"></a>

## Return Value

The signed integer value represented by `str`. The result is `0` if there is a scanning error (if the string contains disallowed characters or does not represent an integer value) or `INT_MAX` or `INT_MIN` if there is an overflow error.

<a id="Discussion"></a>

## Discussion

Consider the following example:

```objc
SInt32 val = CFStringGetIntValue(CFSTR("-123"));
```

The variable `val` in this example would contain the value `-123` after the function is called.

## See Also

### Getting Numeric Values

- [CFStringGetDoubleValue](cfstringgetdoublevalue%28__%29.md): Returns the primary `double` value represented by a string.
