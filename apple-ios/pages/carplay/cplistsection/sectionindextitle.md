> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cplistsection/sectionindextitle

# sectionIndexTitle (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

The string that identifies the current session in an index.

## Declaration

```swift
var sectionIndexTitle: String? { get }
```

<a id="discussion"></a>

## Discussion

For long lists, an index helps people navigate quickly to specific sections of content. This property contains the string you specified at initialization time. If your string contains more than one character, CarPlay displays only the first character in the index.

# sectionIndexTitle (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

The string that identifies the current session in an index.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSString * sectionIndexTitle;
```

<a id="discussion"></a>

## Discussion

For long lists, an index helps people navigate quickly to specific sections of content. This property contains the string you specified at initialization time. If your string contains more than one character, CarPlay displays only the first character in the index.
