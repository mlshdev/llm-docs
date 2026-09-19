> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/clockkit/clkcomplicationtemplategraphicextralargecircularimage/init(imageprovider:)

# init(imageProvider:) (Swift)

**Framework:** ClockKit  
**Kind:** Initializer  
**Availability:** watchOS 7.0+ (deprecated in 27.2)

Creates a template with a circular image.

> On watchOS 9.0 or later, use WidgetKit instead

## Declaration

```swift
init(imageProvider: CLKFullColorImageProvider)
```

## Parameters

- `imageProvider`: A full-color image provider.

# initWithImageProvider: (Objective-C)

**Framework:** ClockKit  
**Kind:** Instance Method  
**Availability:** watchOS 7.0+ (deprecated in 27.2)

Creates a template with a circular image.

> On watchOS 9.0 or later, use WidgetKit instead

## Declaration

```objectivec
- (instancetype) initWithImageProvider:(CLKFullColorImageProvider *) imageProvider;
```

## Parameters

- `imageProvider`: A full-color image provider.

## See Also

### Creating the Template

- [templateWithImageProvider:](templatewithimageprovider_.md): Deprecated. Returns a template with a circular image.
