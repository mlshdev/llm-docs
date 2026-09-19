> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cplisttemplate/maximumheadergridbuttoncount

# maximumHeaderGridButtonCount (Swift)

**Framework:** CarPlay  
**Kind:** Type Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

The maximum number of grid buttons that may appear in a @c CPListTemplate.

## Declaration

```swift
class var maximumHeaderGridButtonCount: Int { get }
```

<a id="discussion"></a>

## Discussion

> **Note**

> Your list template will display the first @c maximumHeaderGridButtonCount buttons. Any sections beyond that limit will be trimmed.

# maximumHeaderGridButtonCount (Objective-C)

**Framework:** CarPlay  
**Kind:** Type Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

The maximum number of grid buttons that may appear in a @c CPListTemplate.

## Declaration

```objectivec
@property (class, nonatomic, readonly) NSUInteger maximumHeaderGridButtonCount;
```

<a id="discussion"></a>

## Discussion

> **Note**

> Your list template will display the first @c maximumHeaderGridButtonCount buttons. Any sections beyond that limit will be trimmed.
