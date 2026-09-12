> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/energykit/electricityinsightquery/granularity-swift.enum/yearly](https://developer.apple.com/documentation/energykit/electricityinsightquery/granularity-swift.enum/yearly)

# ElectricityInsightQuery.Granularity.yearly

**Framework:** EnergyKit  
**Kind:** Case  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst

A yearly aggregated insight record for at least one calendar year.

## Declaration

```swift
case yearly
```

<a id="discussion"></a>

## Discussion

The data period returns insight records aggregated by year for at least one calendar year, and includes the requested date range, potentially starting before the query date. The data range begins and ends in a year or the last available data for the query.

## See Also

### Returning electricity insight records

- [ElectricityInsightQuery.Granularity.daily](daily.md): A daily aggregated insight record for at least one calendar month.
- [ElectricityInsightQuery.Granularity.hourly](hourly.md): An hourly aggregated insight record for at least one calendar week.
- [ElectricityInsightQuery.Granularity.monthly](monthly.md): A monthly aggregated insight record for at least 1 calendar year.
- [ElectricityInsightQuery.Granularity.weekly](weekly.md): A weekly aggregated insight record for at least six months.
