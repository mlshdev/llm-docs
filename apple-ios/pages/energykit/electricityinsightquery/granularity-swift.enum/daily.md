> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/energykit/electricityinsightquery/granularity-swift.enum/daily](https://developer.apple.com/documentation/energykit/electricityinsightquery/granularity-swift.enum/daily)

# ElectricityInsightQuery.Granularity.daily

**Framework:** EnergyKit  
**Kind:** Case  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst

A daily aggregated insight record for at least one calendar month.

## Declaration

```swift
case daily
```

<a id="discussion"></a>

## Discussion

The data period returns insight records aggregated by day for at least one calendar month, and includes the requested date range, potentially starting before the query date. The data range begins and ends in a month or the last available data for the query.

## See Also

### Returning electricity insight records

- [ElectricityInsightQuery.Granularity.hourly](hourly.md): An hourly aggregated insight record for at least one calendar week.
- [ElectricityInsightQuery.Granularity.monthly](monthly.md): A monthly aggregated insight record for at least 1 calendar year.
- [ElectricityInsightQuery.Granularity.weekly](weekly.md): A weekly aggregated insight record for at least six months.
- [ElectricityInsightQuery.Granularity.yearly](yearly.md): A yearly aggregated insight record for at least one calendar year.
