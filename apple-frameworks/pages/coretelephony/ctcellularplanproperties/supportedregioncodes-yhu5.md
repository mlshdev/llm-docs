> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coretelephony/ctcellularplanproperties/supportedregioncodes-yhu5

# supportedRegionCodes

**Framework:** Core Telephony  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

The available regions that your eSIM supports.

## Declaration

```swift
var supportedRegionCodes: [Locale.Region] { get set }
```

<a id="discussion"></a>

## Discussion

Use 2-letter country codes as defined per [ISO 3166-1 alpha-2](https://www.iso.org/obp/ui/#search/code/)

## See Also

### Getting the eSIM properties

- [associatedIccid](associatediccid.md): The integrated circuit card identifier (ICCID) that identifies a SIM.
- [simCapability](simcapability.md): The available type of cellular plan that your eSIM supports.
- [CTCellularPlanProperties.lifecycle](lifecycle.md): A type that contains lifecycle details for a time-limited cellular plan.
- [lifecycleProperties](lifecycleproperties.md): The lifecycle details for a time-limited cellular plan.
