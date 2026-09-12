> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cplisttemplate/listheader](https://developer.apple.com/documentation/carplay/cplisttemplate/listheader)

# listHeader (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+

An optional details header displayed at the top of the list template.

## Declaration

```swift
var listHeader: CPListTemplateDetailsHeader? { get set }
```

<a id="discussion"></a>

## Discussion

The list header provides a way to display additional context or summary information above the list sections. When set, the header appears between the navigation bar and the first list section.

Assigning to this property will dynamically update the List Template to show or hide the header.

# listHeader (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+

An optional details header displayed at the top of the list template.

## Declaration

```objectivec
@property (nonatomic, strong, nullable) CPListTemplateDetailsHeader * listHeader;
```

<a id="discussion"></a>

## Discussion

The list header provides a way to display additional context or summary information above the list sections. When set, the header appears between the navigation bar and the first list section.

Assigning to this property will dynamically update the List Template to show or hide the header.
