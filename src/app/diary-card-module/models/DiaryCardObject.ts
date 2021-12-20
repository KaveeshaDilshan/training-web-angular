class DiaryCardObject{
  private _title:string;
  private _subtitle:string | null;
  private _description:string;
  private _created: Date;

  constructor(title: string, subtitle: any, description: string, date: Date) {
    this._title = title;
    this._subtitle = subtitle;
    this._description = description;
    this._created = date;
  }

  public get title(): string {
    return this._title;
  }

  public set title(value: string) {
    this._title = value;
  }

  public get subtitle(): string | null {
    return this._subtitle;
  }

  public set subtitle(value: string | null) {
    this._subtitle = value;
  }

  public get description(): string {
    return this._description;
  }

  public set description(value: string) {
    this._description = value;
  }

  public get created(): Date {
    return this._created;
  }

}

export default DiaryCardObject;
