> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkcontentrulelist/identifier](https://developer.apple.com/documentation/webkit/wkcontentrulelist/identifier)

# identifier (Swift)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · visionOS 1.0+

The identifier for the rule list.

## Declaration

```swift
var identifier: String! { get }
```

<a id="Discussion"></a>

## Discussion

You specify the identifier for your rule lists at compile time in the [compileContentRuleList(forIdentifier:encodedContentRuleList:completionHandler:)](../wkcontentruleliststore/compilecontentrulelist%28foridentifier_encodedcontentrulelist_completionhandler_%29.md) method of [WKContentRuleListStore](../wkcontentruleliststore.md). You also use this identifier to look up the rules list later.

# identifier (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · visionOS 1.0+

The identifier for the rule list.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSString * identifier;
```

<a id="Discussion"></a>

## Discussion

You specify the identifier for your rule lists at compile time in the [compileContentRuleListForIdentifier:encodedContentRuleList:completionHandler:](../wkcontentruleliststore/compilecontentrulelist%28foridentifier_encodedcontentrulelist_completionhandler_%29.md) method of [WKContentRuleListStore](../wkcontentruleliststore.md). You also use this identifier to look up the rules list later.
