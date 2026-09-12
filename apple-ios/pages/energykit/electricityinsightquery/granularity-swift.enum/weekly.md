> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/energykit/electricityinsightquery/granularity-swift.enum/weekly](https://developer.apple.com/documentation/energykit/electricityinsightquery/granularity-swift.enum/weekly)

# ElectricityInsightQuery.Granularity.weekly

**Framework:** EnergyKit  
**Kind:** Case  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst

A weekly aggregated insight record for at least six months.

## Declaration

```swift
case weekly
```

<a id="discussion"></a>

## Discussion

The data period returns insight records aggregated by week for at least six calendar months, and includes the requested date range, potentially starting before the query date. In the data range, the data begins on the first Monday of January or the first Monday of July. Data ends on the first Monday of July or the first Monday of January or the last available data for the query.

## See Also

### Returning electricity insight records

- [ElectricityInsightQuery.Granularity.daily](daily.md): A daily aggregated insight record for at least one calendar month.
- [ElectricityInsightQuery.Granularity.hourly](hourly.md): An hourly aggregated insight record for at least one calendar week.
- [ElectricityInsightQuery.Granularity.monthly](monthly.md): A monthly aggregated insight record for at least 1 calendar year.
- [ElectricityInsightQuery.Granularity.yearly](yearly.md): A yearly aggregated insight record for at least one calendar year.
