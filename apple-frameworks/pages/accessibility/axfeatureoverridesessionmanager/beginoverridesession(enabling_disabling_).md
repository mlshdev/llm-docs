> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/accessibility/axfeatureoverridesessionmanager/beginoverridesession(enabling:disabling:)

# beginOverrideSession(enabling:disabling:) (Swift)

**Framework:** Accessibility  
**Kind:** Instance Method  
**Availability:** iOS 18.2+ · iPadOS 18.2+

## Declaration

```swift
func beginOverrideSession(enabling enableOptions: AXFeatureOverrideSession.Options = [], disabling disableOptions: AXFeatureOverrideSession.Options = []) throws -> AXFeatureOverrideSession
```

# beginOverrideSessionEnablingOptions:disablingOptions:error: (Objective-C)

**Framework:** Accessibility  
**Kind:** Instance Method  
**Availability:** iOS 18.2+ · iPadOS 18.2+

## Declaration

```objectivec
- (AXFeatureOverrideSession *) beginOverrideSessionEnablingOptions:(AXFeatureOverrideSessionOptions) enableOptions disablingOptions:(AXFeatureOverrideSessionOptions) disableOptions error:(NSError **) error;
```
