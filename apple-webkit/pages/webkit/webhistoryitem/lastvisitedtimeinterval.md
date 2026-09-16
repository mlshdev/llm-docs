> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-f54edb363a08; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/webkit/webhistoryitem/lastvisitedtimeinterval

# lastVisitedTimeInterval (Swift)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** macOS 10.3+ (deprecated in 10.14)

The last time and date the receiver’s page was visited.

## Declaration

```swift
var lastVisitedTimeInterval: TimeInterval { get }
```

<a id="Discussion"></a>

## Discussion

The interval is from a reference date as determined by [NSDate](https://developer.apple.com/documentation/foundation/nsdate).

## See Also

### Getting other attributes

- [icon](icon.md): Deprecated. The icon for the receiver’s page, or `nil` if none exists.

# lastVisitedTimeInterval (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** macOS 10.3+ (deprecated in 10.14)

The last time and date the receiver’s page was visited.

## Declaration

```objectivec
@property (nonatomic, readonly) NSTimeInterval lastVisitedTimeInterval;
```

<a id="Discussion"></a>

## Discussion

The interval is from a reference date as determined by [NSDate](https://developer.apple.com/documentation/foundation/nsdate).

## See Also

### Getting other attributes

- [icon](icon.md): Deprecated. The icon for the receiver’s page, or `nil` if none exists.
