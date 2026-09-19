> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/networkextension/nerelaymanager/isdnsfailoverallowed

# isDNSFailoverAllowed (Swift)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

## Declaration

```swift
var isDNSFailoverAllowed: Bool { get set }
```

<a id="discussion"></a>

## Discussion

Determines if DNS queries that fail over relay can fallback to default DNS

# allowDNSFailover (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

## Declaration

```objectivec
@property (getter=isDNSFailoverAllowed) BOOL allowDNSFailover;
```

<a id="discussion"></a>

## Discussion

Determines if DNS queries that fail over relay can fallback to default DNS
