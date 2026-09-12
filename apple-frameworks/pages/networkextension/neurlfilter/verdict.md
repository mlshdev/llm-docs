> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/neurlfilter/verdict](https://developer.apple.com/documentation/networkextension/neurlfilter/verdict)

# NEURLFilter.Verdict (Swift)

**Framework:** Network Extension  
**Kind:** Enumeration  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+

A verdict returned by a URL filter.

## Declaration

```swift
enum Verdict
```

<a id="overview"></a>

## Overview

You receive this type as the result of calling [verdict(for:)](verdict%28for_%29.md) on a [NEURLFilter](../neurlfilter.md) instance.

## Topics

### Verdicts

- [NEURLFilter.Verdict.allow](verdict/allow.md): A verdict that indicates that accessing the URL is allowed.
- [NEURLFilter.Verdict.deny](verdict/deny.md): A verdict that indicates that accessing the URL is denied.
- [NEURLFilter.Verdict.unknown](verdict/unknown.md): A verdict that indicates URL validation failed.

### Working with raw values

- [init(rawValue:)](verdict/init%28rawvalue_%29.md): Creates a new instance with the specified raw value.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Evaluating a URL

- [verdict(for:)](verdict%28for_%29.md): Determines if accessing the specified URL is allowed or denied.

# NEURLFilterVerdict (Objective-C)

**Framework:** Network Extension  
**Kind:** Enumeration  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+

A verdict returned by a URL filter.

## Declaration

```objectivec
enum NEURLFilterVerdict : NSInteger;
```

<a id="overview"></a>

## Overview

You receive this type as the result of calling [verdict(for:)](verdict%28for_%29.md) on a [NEURLFilter](../neurlfilter.md) instance.

## Topics

### Verdicts

- [NEURLFilterVerdictAllow](verdict/allow.md): A verdict that indicates that accessing the URL is allowed.
- [NEURLFilterVerdictDeny](verdict/deny.md): A verdict that indicates that accessing the URL is denied.
- [NEURLFilterVerdictUnknown](verdict/unknown.md): A verdict that indicates URL validation failed.

## See Also

### Evaluating a URL

- [verdictForURL:completionHandler:](verdictforurl_completionhandler_.md): Determines if accessing the specified URL is allowed or denied.
