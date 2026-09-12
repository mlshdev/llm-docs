> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkcontentrulelist](https://developer.apple.com/documentation/webkit/wkcontentrulelist)

# WKContentRuleList (Swift)

**Framework:** WebKit  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · visionOS 1.0+

A compiled list of rules to apply to web content.

## Declaration

```swift
@MainActor class WKContentRuleList
```

<a id="overview"></a>

## Overview

A [WKContentRuleList](wkcontentrulelist.md) object represents a compiled set of rules for modifying how a webpage loads content. You don’t create a [WKContentRuleList](wkcontentrulelist.md) directly. Instead, you specify your rules in JSON format and compile them using the [compileContentRuleList(forIdentifier:encodedContentRuleList:completionHandler:)](wkcontentruleliststore/compilecontentrulelist%28foridentifier_encodedcontentrulelist_completionhandler_%29.md) method of [WKContentRuleListStore](wkcontentruleliststore.md). That method compiles your rules into an efficient byte format and returns them in an instance of this class.

Content rule lists use the same syntax as content blocker extensions in Safari. For more information on how to specify the JSON for your rule lists, see [Creating a content blocker](https://developer.apple.com/documentation/safariservices/creating-a-content-blocker).

## Topics

### Getting the Rules List Identifier

- [identifier](wkcontentrulelist/identifier.md): The identifier for the rule list.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Adding and Removing Content Rules

- [add(\_:)](wkusercontentcontroller/add%28__%29.md): Adds the specified content rule list to the content controller object.
- [remove(\_:)](wkusercontentcontroller/remove%28__%29.md): Removes the specified rule list from the content controller object.
- [removeAllContentRuleLists()](wkusercontentcontroller/removeallcontentrulelists%28%29.md): Removes all rules lists from the content controller.

# WKContentRuleList (Objective-C)

**Framework:** WebKit  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · visionOS 1.0+

A compiled list of rules to apply to web content.

## Declaration

```objectivec
@interface WKContentRuleList : NSObject
```

<a id="overview"></a>

## Overview

A [WKContentRuleList](wkcontentrulelist.md) object represents a compiled set of rules for modifying how a webpage loads content. You don’t create a [WKContentRuleList](wkcontentrulelist.md) directly. Instead, you specify your rules in JSON format and compile them using the [compileContentRuleListForIdentifier:encodedContentRuleList:completionHandler:](wkcontentruleliststore/compilecontentrulelist%28foridentifier_encodedcontentrulelist_completionhandler_%29.md) method of [WKContentRuleListStore](wkcontentruleliststore.md). That method compiles your rules into an efficient byte format and returns them in an instance of this class.

Content rule lists use the same syntax as content blocker extensions in Safari. For more information on how to specify the JSON for your rule lists, see [Creating a content blocker](https://developer.apple.com/documentation/safariservices/creating-a-content-blocker).

## Topics

### Getting the Rules List Identifier

- [identifier](wkcontentrulelist/identifier.md): The identifier for the rule list.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

## See Also

### Adding and Removing Content Rules

- [addContentRuleList:](wkusercontentcontroller/add%28__%29.md): Adds the specified content rule list to the content controller object.
- [removeContentRuleList:](wkusercontentcontroller/remove%28__%29.md): Removes the specified rule list from the content controller object.
- [removeAllContentRuleLists](wkusercontentcontroller/removeallcontentrulelists%28%29.md): Removes all rules lists from the content controller.
