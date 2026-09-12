> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nstextlist/init(markerformat:options:)](https://developer.apple.com/documentation/uikit/nstextlist/init(markerformat:options:))

# init(markerFormat:options:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns an initialized text list.

## Declaration

```swift
convenience init(markerFormat: NSTextList.MarkerFormat, options: Int)
```

## Parameters

- `markerFormat`: The marker format for the text list.
- `options`: The marker options for the text list. Values for `mask` are listed in [Constants](../nstextlist.md#Constants).

<a id="return-value"></a>

## Return Value

An initialized text list.

<a id="Discussion"></a>

## Discussion

The marker format is specified as a constant string, except for a numbering specifier, which takes the form `{`keyword`}`. The currently supported values for keyword include:

- `box`
- `check`
- `circle`
- `diamond`
- `disc`
- `hyphen`
- `square`
- `lower-hexadecimal`
- `upper-hexadecimal`
- `octal`
- `lower-alpha` or  `lower-latin`
- `upper-alpha` or  `upper-latin`
- `lower-roman`
- `upper-roman`
- `decimal`

Thus, for example, `@"({decimal})"` would specify the format for a list numbered (1), (2), (3), and so on, and `@"{upper-roman}"` would specify the format for a list numbered I, II, III, IV, and so on. (All of these keywords are included in the Cascading Style Sheets level 3 specification.)

## See Also

### Related Documentation

- [markerFormat](markerformat-swift.property.md): Returns the marker format string used by the receiver.
- [listOptions](listoptions.md): Returns the list options mask value of the receiver.

### Creating a text list

- [init(coder:)](init%28coder_%29.md): Initializes and returns a newly allocated text list item.
- [init(markerFormat:options:startingItemNumber:)](init%28markerformat_options_startingitemnumber_%29.md): Returns a new text list with the format, options, and starting item number you provide.

# initWithMarkerFormat:options: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns an initialized text list.

## Declaration

```objectivec
- (instancetype) initWithMarkerFormat:(NSTextListMarkerFormat) markerFormat options:(NSUInteger) options;
```

## Parameters

- `markerFormat`: The marker format for the text list.
- `options`: The marker options for the text list. Values for `mask` are listed in [Constants](../nstextlist.md#Constants).

<a id="return-value"></a>

## Return Value

An initialized text list.

<a id="Discussion"></a>

## Discussion

The marker format is specified as a constant string, except for a numbering specifier, which takes the form `{`keyword`}`. The currently supported values for keyword include:

- `box`
- `check`
- `circle`
- `diamond`
- `disc`
- `hyphen`
- `square`
- `lower-hexadecimal`
- `upper-hexadecimal`
- `octal`
- `lower-alpha` or  `lower-latin`
- `upper-alpha` or  `upper-latin`
- `lower-roman`
- `upper-roman`
- `decimal`

Thus, for example, `@"({decimal})"` would specify the format for a list numbered (1), (2), (3), and so on, and `@"{upper-roman}"` would specify the format for a list numbered I, II, III, IV, and so on. (All of these keywords are included in the Cascading Style Sheets level 3 specification.)

## See Also

### Related Documentation

- [markerFormat](markerformat-swift.property.md): Returns the marker format string used by the receiver.
- [listOptions](listoptions.md): Returns the list options mask value of the receiver.

### Creating a text list

- [initWithCoder:](init%28coder_%29.md): Initializes and returns a newly allocated text list item.
- [initWithMarkerFormat:options:startingItemNumber:](init%28markerformat_options_startingitemnumber_%29.md): Returns a new text list with the format, options, and starting item number you provide.
