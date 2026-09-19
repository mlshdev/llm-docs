> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpmappanelsection/init(title:items:)

# init(title:items:) (Swift)

**Framework:** CarPlay  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Initializes the section with the specified title and items.

## Declaration

```swift
init(title: String?, items: [CPMapPanelItem])
```

## Parameters

- `title`: The localized title of the section. The system displays this string at the top of the section’s content. The section object stores a copy of the provided string. Specify `nil` if you don’t want to display a title for the section.
- `items`: The array of items to display in the section. Specify at least one item in this array. The section object stores a copy of the provided array.

<a id="return-value"></a>

## Return Value

An initialized section object.

# initWithTitle:items: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Initializes the section with the specified title and items.

## Declaration

```objectivec
- (instancetype) initWithTitle:(NSString *) title items:(NSArray<CPMapPanelItem *> *) items;
```

## Parameters

- `title`: The localized title of the section. The system displays this string at the top of the section’s content. The section object stores a copy of the provided string. Specify `nil` if you don’t want to display a title for the section.
- `items`: The array of items to display in the section. Specify at least one item in this array. The section object stores a copy of the provided array.

<a id="return-value"></a>

## Return Value

An initialized section object.
