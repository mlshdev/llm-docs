> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/tvml/property-path--less-than

# {property-path}-less-than

**Kind:** Article

Compares a value from a JSON file to a specified value to find out if the JSON value is less than the specified value.

<a id="Overview"></a>

## Overview

The `{property-path}-less-than` query is used with data binding to determine whether one value is smaller than another. Bind a value from your JSON file to a variable associated with the query. If the `property-path` is less than the designated value, the element is processed.

For example, you want to notify a user that a movie has less than 24 hours left in the rental period. Add a `specialize` element that contains a `{property-path}-less-than` query. If the `hoursLeft` variable is less than 24, color the title red.

```xml
<specialize state="({hoursLeft}-less-than:24)">
    <title tag="title" style="color:red"/>
</specialize>
```
