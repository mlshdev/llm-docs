> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/listformatter/locale](https://developer.apple.com/documentation/foundation/listformatter/locale)

# locale (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The locale to use when formatting items in the list.

## Declaration

```swift
var locale: Locale! { get set }
```

<a id="Discussion"></a>

## Discussion

The default value is [autoupdatingCurrent](../nslocale/autoupdatingcurrent.md). If you set this property to `nil`, the formatter resets to using [autoupdatingCurrent](../nslocale/autoupdatingcurrent.md).

## See Also

### Configuring Formatter Options

- [itemFormatter](itemformatter.md): An object that formats each item in the list.

# locale (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The locale to use when formatting items in the list.

## Declaration

```objectivec
@property (copy, null_resettable) NSLocale * locale;
```

<a id="Discussion"></a>

## Discussion

The default value is [autoupdatingCurrentLocale](../nslocale/autoupdatingcurrent.md). If you set this property to `nil`, the formatter resets to using [autoupdatingCurrentLocale](../nslocale/autoupdatingcurrent.md).

## See Also

### Configuring Formatter Options

- [itemFormatter](itemformatter.md): An object that formats each item in the list.
