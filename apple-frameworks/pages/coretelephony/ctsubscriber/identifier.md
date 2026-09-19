> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coretelephony/ctsubscriber/identifier

# identifier (Swift)

**Framework:** Core Telephony  
**Kind:** Instance Property  
**Availability:** iOS 12.1+ · iPadOS 12.1+ · Mac Catalyst 12.1+

An implementation-defined identifier used to correlate this subscriber with information vended by other APIs.

## Declaration

```swift
var identifier: String { get }
```

<a id="Discussion"></a>

## Discussion

The format of the identifier can change across software releases. Therefore, do not persist this identifier.

# identifier (Objective-C)

**Framework:** Core Telephony  
**Kind:** Instance Property  
**Availability:** iOS 12.1+ · iPadOS 12.1+

An implementation-defined identifier used to correlate this subscriber with information vended by other APIs.

## Declaration

```objectivec
@property (nonatomic, readonly) NSString * identifier;
```

<a id="Discussion"></a>

## Discussion

The format of the identifier can change across software releases. Therefore, do not persist this identifier.
