> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpinterfacecontroller/dismisstemplate(animated:)

# dismissTemplate(animated:) (Swift)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ (deprecated in 14.0) · iPadOS 12.0+ (deprecated in 14.0) · Mac Catalyst 13.1+ (deprecated in 14.0)

Dismiss the current modally-presented template, optionally animating the dismissal.

## Declaration

```swift
func dismissTemplate(animated: Bool)
```

<a id="discussion"></a>

## Discussion

> **Note**

> If there is no current modally-presented template, this method will have no effect.

## See Also

### Deprecated

- [pop(to:animated:)](pop%28to_animated_%29.md): Deprecated. Pop back to a specified template.
- [popTemplate(animated:)](poptemplate%28animated_%29.md): Deprecated. Pop back a single level in the template navigation hierarchy.
- [popToRootTemplate(animated:)](poptoroottemplate%28animated_%29.md): Deprecated. Pop back to the first template in the template navigation hierarchy.
- [presentTemplate(\_:animated:)](presenttemplate%28__animated_%29.md): Deprecated. Present a template modally over the navigation hierarchy. Only one template may be presented at a time.
- [pushTemplate(\_:animated:)](pushtemplate%28__animated_%29.md): Deprecated. Push a new template onto the template navigation hierarchy, showing it immediately.
- [setRootTemplate(\_:animated:)](setroottemplate%28__animated_%29.md): Deprecated. Set the root template. If no existing templates exist in the template navigation hierarchy, the animated flag will be ignored. If there is an existing template navigation hierarchy, the existing stack will be replaced by the new root template.

# dismissTemplateAnimated: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ (deprecated in 14.0) · iPadOS 12.0+ (deprecated in 14.0) · Mac Catalyst 13.1+ (deprecated in 14.0)

Dismiss the current modally-presented template, optionally animating the dismissal.

## Declaration

```objectivec
- (void) dismissTemplateAnimated:(BOOL) animated;
```

<a id="discussion"></a>

## Discussion

> **Note**

> If there is no current modally-presented template, this method will have no effect.

## See Also

### Deprecated

- [popToTemplate:animated:](pop%28to_animated_%29.md): Deprecated. Pop back to a specified template.
- [popTemplateAnimated:](poptemplate%28animated_%29.md): Deprecated. Pop back a single level in the template navigation hierarchy.
- [popToRootTemplateAnimated:](poptoroottemplate%28animated_%29.md): Deprecated. Pop back to the first template in the template navigation hierarchy.
- [presentTemplate:animated:](presenttemplate%28__animated_%29.md): Deprecated. Present a template modally over the navigation hierarchy. Only one template may be presented at a time.
- [pushTemplate:animated:](pushtemplate%28__animated_%29.md): Deprecated. Push a new template onto the template navigation hierarchy, showing it immediately.
- [setRootTemplate:animated:](setroottemplate%28__animated_%29.md): Deprecated. Set the root template. If no existing templates exist in the template navigation hierarchy, the animated flag will be ignored. If there is an existing template navigation hierarchy, the existing stack will be replaced by the new root template.
