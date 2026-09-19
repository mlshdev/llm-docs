> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/bundleresources/information-property-list/attributioncopyendpoint

# AttributionCopyEndpoint

**Interface languages:** Swift, Objective-C

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** iOS 17.4+ · iPadOS 17.4+

A key that defines a URL that AdAttributionKit uses to deliver copies of ad attribution postbacks.

## Details

`AttributionCopyEndpoint`

<a id="Discussion"></a>

## Discussion

Use this key to specify a URL to receive copies of postbacks. For more information, see [Configuring an advertised app](https://developer.apple.com/documentation/adattributionkit/configuring-an-advertised-app).

## See Also

### Ad attributions

- [AdNetworkIdentifiers](adnetworkidentifiers.md): An array of strings that identifies the ad networks a publisher app shows advertisements for.
- [EligibleForAdAttributionKitReengagementPostbackCopies](eligibleforadattributionkitreengagementpostbackcopies.md): A Boolean value that indicates whether the developer receives copies of AdAttributionKit reengagement postbacks.
